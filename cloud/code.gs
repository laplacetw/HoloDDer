/**
 * Access the cloud data(spreadsheet) of user's personal configuration
 * @param {String} action: write / read
 * @param {Array} data: [bgImg, vtuber] (or empty string when read)
 * @return {Object} {user(ID), bgImg, vtuber} (or 'false' when read a non existent user)
 */
function userConfigAPI(action, data) {
  // action: "write" / "read"
  const api = "https://script.google.com/macros/s/{ID}/exec";
  // no saving user email directly
  let currUserID = Utilities.computeDigest(
    Utilities.DigestAlgorithm.SHA_256, 
    Session.getActiveUser().getEmail()
  );
  // convert byte array to base64 encoded string
  // "@" is added to prevent the string be parsed as formula by spreadsheet
  currUserID = "@" + Utilities.base64Encode(currUserID) + "@";

  const params = {
    "method": action,
    "user": currUserID,
    "bgImg": action === "write" ? data[0] : "",
    "vtuber": action === "write" ? data[1] : ""
  }

  const options = {
    'method': 'post',
    'payload': params
  }

  return UrlFetchApp.fetch(api, options).getContentText('UTF-8');
}

/**
 * Access the cloud data(spreadsheet) of VTubers' channel avatar
 * @param {String} action: write / read / all (read all)
 * @param {Object} data: {vtuber : avatarURL (or empty string when read)}
 * @return {Object} {vtuber : avatarURL (or 'true' when write successfully)}
 */
function chAvatarAPI(action, data) {
  const api = "https://script.google.com/macros/s/{ID}/exec";

  const params = {
      "method": action,
      "avatars": JSON.stringify(data)
    }

  const options = {
    'method': 'post',
    'payload': params
  }

  return UrlFetchApp.fetch(api, options).getContentText('UTF-8');
}

/**
 * Check user and personal configuration
 * @param {String} localUserID: user ID from local storage
 * @return {String} : depend on old or new user
 */
function currUserCheck(localUserID) {
  // no saving user email directly
  let currUserID = Utilities.computeDigest(
    Utilities.DigestAlgorithm.SHA_256, 
    Session.getActiveUser().getEmail()
  );
  // convert byte array to base64 encoded string
  // "@" is added to prevent the string be parsed as formula by spreadsheet
  currUserID = "@" + Utilities.base64Encode(currUserID) + "@";

  if (localUserID === currUserID) {
    return 'true';
  } else {
    // no localUserID or localUserID not equl to currUserID
    const res =  userConfigAPI("read", currUserID);
    if (res === 'false') return currUserID;  // currUserID doesn't exist on cloud
    else return JSON.parse(res);   
  }
}

/**
 * Get channel info by YouTube video url with the UrlFetchApp.fetch()
 * @param {String} url: YouTube url
 * @return {Array} chInfo: [chName, chAvatarURL]
 */
function getChInfoByVideo(url) {
  const rawData = UrlFetchApp.fetch(url).getContentText('UTF-8');
  const $ = Cheerio.load(rawData);  // HTML parser
  let chInfo = ["", ""];

  $('script:not([src])').each((i, elem) => {
    const data = elem.children[0].data;
    if (data.indexOf('var ytInitialData') > -1) {
      let json = "";
      // prevent parsing fail of JSON strings
      json = data.replace(/\\x7b/g, '{').replace(/\\x7d/g, '}')
            .replace(/%25/g, '%').replace(/\\x5b/g, '[').replace(/\\x5d/g, ']')
            .replace(/\\x22/g, '"').replace(/\\x3d|%3D/g, '=').replace(/%23/g, '#')
            .replace(/%26|\\\\u0026/g, '&').replace(/%3A/g, ':').replace(/%2F/g, '/')
            .replace(/%3F/g, '_');

      json = JSON.stringify(json).replace(/\\/g, '');
      // keep JSON data needed only
      json = json.match(/{"slimVideoMetadataSectionRenderer[\W\w]*?"itemSectionRenderer"/)[0];
      json = json.replace(',{"itemSectionRenderer"', '');

      try {
        json = JSON.parse(json);
        const videoMeta = json.slimVideoMetadataSectionRenderer.contents[2];
        // channel name
        const chName = videoMeta.slimOwnerRenderer.title.runs[0].text;
        // avatar url
        const chAvatarURL = videoMeta.slimOwnerRenderer.thumbnail.thumbnails[0].url;
        
        chInfo = [chName, chAvatarURL];
        return false;  // interrupt loop of $('script:not([src])').each()
      }
      catch(error) {
        chInfo = [error, ""];
        return false;  // interrupt loop of $('script:not([src])').each()
      }
    }
  });

  return chInfo;
}

/**
 * Get livestream data from Hololive official website.
 * @param {Object} avatars: {vtuber : [isAvailable, avatarURL]}
 * @return {Object} livestreams: {vtuber : [isShowable, avatarURL, livestreamID, save2Local]}
 */
function getHoloLiveStreams(avatars) {
  const holoSched = 'https://schedule.hololive.tv';
  const rawData = UrlFetchApp.fetch(holoSched).getContentText('UTF-8');
  const $ = Cheerio.load(rawData);  // HTML parser
  const vtubers = Object.keys(avatars);
  const livestreams = {};
  const invalidAvatarStreamID = {};

  // livestream data from Hololive official
  $('.thumbnail').toArray().forEach(item => {
    const pattern = /\{'event_category':'.+'/;
    const vtuber = item.attribs['onclick'].match(pattern)[0].split(":'")[1].split("',")[0];
    // border RED indicates live streaming
    const isStreaming = item.attribs['style'].search(/red/);
    const livestreamID = item.attribs['href'].split('?v=')[1];

    if (isStreaming > -1 && (vtubers.includes(vtuber))) {
      if (avatars[vtuber][0]) livestreams[vtuber] = [true, avatars[vtuber][1], livestreamID, false];
      else invalidAvatarStreamID[vtuber] = livestreamID;
    }
  });

  // process the invalid avatar url
  if (Object.keys(invalidAvatarStreamID).length > 0) {
    const defaultAvatar = "https://yt3.ggpht.com/ppGub48S1GDyijg_Y8ZQj9Y6k6KjLWmUThu61MUmQsHiWf1QszZdhdGitCQUZlBwwdAQW3jk=s88-c-k-c0x00ffffff-no-rj-mo";
    const updateData = {};
    const avatarData = chAvatarAPI("read", invalidAvatarStreamID);
    Object.keys(invalidAvatarStreamID).forEach(vtuber => {
      if (avatars[vtuber][1]) {
        const chInfo = getChInfoByVideo("https://youtu.be/" + invalidAvatarStreamID[vtuber]);
        if (chInfo[1] && chInfo[1] !== avatars[vtuber][1]) {
          updateData[vtuber] = chInfo[1]
          livestreams[vtuber] = [true, chInfo[1], invalidAvatarStreamID[vtuber], true];
        } else {
          // if getChInfoByVideo() return invalid url
          livestreams[vtuber] = [true, defaultAvatar, invalidAvatarStreamID[vtuber], false];
        }
      } else {
        livestreams[vtuber] = [true, avatarData[vtuber], invalidAvatarStreamID[vtuber], true];
      }
    });

    // update cloud data
    if (Object.keys(updateData).length > 0) chAvatarAPI("write", updateData);
  }

  return livestreams;
}

// https://developers.google.com/apps-script/guides/html/best-practices
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

function doGet() {
  return HtmlService.createTemplateFromFile('index')
    .evaluate().setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}