/**
 * Read user data with Properties Service.
 * @param {Array}
 * @return {Object} user data
 */
function readUserData(keys) {
  const userProperties = PropertiesService.getUserProperties();
  const data = userProperties.getProperties();
  const res = {};

  keys.forEach(key => {
    if(data[key]) res[key] = data[key];
  });

  return res;
}

/**
 * Write user data with Properties Service.
 * @param {Object} user data
 */
function writeUserData(data) {
  const userProperties = PropertiesService.getUserProperties();
  userProperties.setProperties(data);
}

/**
 * Rate (like) a Youtube video
 * @param {String}
 */
function rateVideo(videoID) {
  YouTube.Videos.rate(videoID, 'like');
}

/**
 * Get channel info by YouTube video url
 * @param {String} YouTube url
 * @return {Array} [chName, chAvatar]
 */
function getChInfoByVideo(url) {
  let chInfo = ["", ""];
  const video = SubTube.video(url);
  if(video.meta) chInfo = [video.chName(), video.chAvatarS()];

  return chInfo;
}

/**
 * Get livestream data from Hololive official website.
 * @param {Object} {vtuber : [isAvailable, avatarUrl]}
 * @return {Object} {vtuber : [isShowable, avatarUrl, livestreamID, isUpdated, isLiked]}
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
      if (avatars[vtuber][0]) livestreams[vtuber] = [true, avatars[vtuber][1], livestreamID, false, false];
      else invalidAvatarStreamID[vtuber] = livestreamID;
    }
  });

  // process the invalid avatar url
  if (Object.keys(invalidAvatarStreamID).length > 0) {
    const defaultAvatar = "https://yt3.ggpht.com/ppGub48S1GDyijg_Y8ZQj9Y6k6KjLWmUThu61MUmQsHiWf1QszZdhdGitCQUZlBwwdAQW3jk=s88-c-k-c0x00ffffff-no-rj-mo";
    
    Object.keys(invalidAvatarStreamID).forEach(vtuber => {
      const chInfo = getChInfoByVideo("https://youtu.be/" + invalidAvatarStreamID[vtuber]);
      if (chInfo[1]) {
        livestreams[vtuber] = [true, chInfo[1], invalidAvatarStreamID[vtuber], true, false];
      } else {
        // if getChInfoByVideo() return invalid url
        livestreams[vtuber] = [true, defaultAvatar, invalidAvatarStreamID[vtuber], false, false];
      }
    });
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