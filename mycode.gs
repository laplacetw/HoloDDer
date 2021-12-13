let holoChID = {
  '白上フブキ':'UCdn5BQ06XqgXoAxIhbqw5Rg',
};

function liveStreamCheck(id) {
  let res = YouTube.Search.list('id,snippet', {
    channelId: id,
    type: 'video',
    eventType: 'live',
    maxResults: 1
  });

  return res.items;
}

function getAllLiveStream() {
  let liveStreamID = {};

  Object.keys(holoChID).forEach(key => {
    let items = liveStreamCheck(holoChID[key]);
    if(items.length > 0) {
      let id = items[0].id.videoId;
      let title = items[0].snippet.title;
      liveStreamID[id] = title;
    }
    Utilities.sleep(200);
  });

  return liveStreamID;
}

function doGet() {
  return HtmlService.createHtmlOutputFromFile("index");
}