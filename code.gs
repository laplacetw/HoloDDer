// YouTube channel ID
const holoChID = {
  "不知火フレア":"UCvInZx9h3jC2JzsIzoOebWg",
  "白銀ノエル":"UCdyqAaZDKHXg4Ahi7VENThQ",
  "宝鐘マリン":"UCCzUftO8KOVkV4wQG1vkUvg",
  "兎田ぺこら":"UC1DCedRgGHBdm81E1llLhOQ",
  "潤羽るしあ":"UCl_gCybOJRIgOXw6Qb4qJzQ",
};

const holoAvatar = {
  "ホロライブ":"https://yt3.ggpht.com/ytc/AKedOLTj0OSWM9TvPy4e8v1_o99OtP3Bg7FXthdkgr2bCQ=s176-c-k-c0x00ffffff-no-rj-mo",
  "ときのそら":"https://yt3.ggpht.com/ytc/AKedOLQO9Vyz7ysAwPSio5xvkw6n0xvlyDu7A9eawqIH3w=s176-c-k-c0x00ffffff-no-rj-mo",
  "AZKi":"https://yt3.ggpht.com/ytc/AKedOLQQhnWKHLOLxjnXksGHHC8bnVS2UniL8Od6JTEPWQ=s176-c-k-c0x00ffffff-no-rj-mo",
  "ロボ子":"https://yt3.ggpht.com/ytc/AKedOLTVWKjrovP0tGtguup9TYZicykceA45olVmEr2kvQ=s176-c-k-c0x00ffffff-no-rj-mo",
  "さくらみこ":"https://yt3.ggpht.com/ytc/AKedOLQlZnbXr-RooUQezemDKu7alJrZcEMy8_5P07ILug=s176-c-k-c0x00ffffff-no-rj-mo",
  "白上フブキ":"https://yt3.ggpht.com/ytc/AKedOLQmM8F8S-7GTcF5Lw7fBALF8FQC9yNKTb_nFHev2w=s176-c-k-c0x00ffffff-no-rj-mo",
  "夏色まつり":"https://yt3.ggpht.com/ytc/AKedOLQCXDfJbZoEZ-gtUiF4nSaGU8-qiq--BSTd92Sw=s176-c-k-c0x00ffffff-no-rj-mo",
  "夜空メル":"https://yt3.ggpht.com/ytc/AKedOLSwGrjnpZYhSj5yOV35k_CaXHeCbW1222lgtgbW=s88-c-k-c0x00ffffff-no-rj",
  "赤井はあと":"https://yt3.ggpht.com/rNj6bichsOoUjA2N9iXWxInEt9Y2Fo5fhG4S8oR17ip8ouCu_7wmX3PnQxt6OP6Rd9OlYXYcmw=s176-c-k-c0x00ffffff-no-rj-mo",
  "アキロゼ":"https://yt3.ggpht.com/ytc/AKedOLT4XEPRFwXpb4gZ1qco_xCOt7ems7SrUsGOkmXX=s176-c-k-c0x00ffffff-no-rj-mo",
  "湊あくあ":"https://yt3.ggpht.com/ytc/AKedOLTbU5ET3bgn0Iuz1jUBNjgSe9EW8kLxIhDUrtJlPw=s176-c-k-c0x00ffffff-no-rj-mo",
  "癒月ちょこ":"https://yt3.ggpht.com/ytc/AKedOLQn_VxZ1ApMgQahrkcTtSdSAr6Jpxi4eHQiMnIlsw=s176-c-k-c0x00ffffff-no-rj-mo",
  "百鬼あやめ":"https://yt3.ggpht.com/XDGhKwPZcT16Ppg2gQmLHEIYRhw9sY4rqG0HWbeCH68LHkhlVQrrFgxd5hWUuMb2nLfDOhu6=s176-c-k-c0x00ffffff-no-rj-mo",
  "紫咲シオン":"https://yt3.ggpht.com/AyUL9W0ltc_aJr_MysuZBx8hRfb1SIVNREgU9kiOO-lqmdhYkEsllmhagertVIwHwa3UAAKy=s176-c-k-c0x00ffffff-no-rj-mo",
  "大空スバル":"https://yt3.ggpht.com/ytc/AKedOLRaQJl61Pxhsnrzz50wirogPn18pPUYL0YFAauj=s176-c-k-c0x00ffffff-no-rj-mo",
  "大神ミオ":"https://yt3.ggpht.com/ytc/AKedOLRP0h31urAKtYcu_j1foVuGyPU65_Y-VNBqLgHB5Q=s176-c-k-c0x00ffffff-no-rj-mo",
  "猫又おかゆ":"https://yt3.ggpht.com/ytc/AKedOLT_TLZsRHyNXj_3v1QIfF5Z1LOEIKQPL_7HGH29=s176-c-k-c0x00ffffff-no-rj-mo",
  "戌神ころね":"https://yt3.ggpht.com/ytc/AKedOLSegxVNNn4QGDwO-jO89ZDcYLSyPUQS3a4KU6QPCw=s176-c-k-c0x00ffffff-no-rj-mo",
  "不知火フレア":"https://yt3.ggpht.com/d9aIrGtZR0eI4k1Wnev5f_R4llIBsWnQOjkdsqkMycoAxA3g_zz-jyeBl8tEHfbm1iTg0SJj=s176-c-k-c0x00ffffff-no-rj-mo",
  "白銀ノエル":"https://yt3.ggpht.com/ytc/AKedOLS1MTrG3Gn7-Vf_rVNAZ2Ou8KrmUGUXO6TmkLxe=s176-c-k-c0x00ffffff-no-rj-mo",
  "宝鐘マリン":"https://yt3.ggpht.com/ytc/AKedOLRFcdtwPHqI4573geBEyNL5h93BxtH5cMy_aL4zUw=s176-c-k-c0x00ffffff-no-rj-mo",
  "兎田ぺこら":"https://yt3.ggpht.com/ytc/AKedOLSmHTeNNQp8A4AwsUPKzBa2ubDBWe6RSaG39mAYTw=s176-c-k-c0x00ffffff-no-rj-mo",
  "潤羽るしあ":"https://yt3.ggpht.com/ytc/AKedOLR1en3cN55loPrFL1C5K19o5xGhcKkmr0noD4cO=s176-c-k-c0x00ffffff-no-rj-mo",
  "星街すいせい":"https://yt3.ggpht.com/ytc/AKedOLSAm13gTESsu39zgJ1TYb649BiGqYa_XCv5C6Lu=s176-c-k-c0x00ffffff-no-rj-mo",
  "天音かなた":"https://yt3.ggpht.com/TlH8nz5O9UYo5JZ_5fo4JfXdT18N0Ck27wWrulni-c1g5bwes0tVmFiSKICzI1SW7itaTkk9GA=s176-c-k-c0x00ffffff-no-rj-mo",
  "角巻わため":"https://yt3.ggpht.com/ytc/AKedOLRWpyqOZzCmuSfmKGNo8TD2L_IRUYSw1wyhHXw-=s176-c-k-c0x00ffffff-no-rj-mo",
  "常闇トワ":"https://yt3.ggpht.com/meRnxbRUm5yPSwq8Q5QpI5maFApm5QTGQV_LGblQFsoO0yAV4LI-nSZ70GYwMZ_tbfSa_O8MTCU=s176-c-k-c0x00ffffff-no-rj-mo",
  "姫森ルーナ":"https://yt3.ggpht.com/yVg0ujw11JN5YSykr-63ivgudlC5PE5Kzn3Cpm7eFWVB7fxtcJvTXcG1M_9tFHETJ7144NO6=s176-c-k-c0x00ffffff-no-rj-mo",
  "雪花ラミィ":"https://yt3.ggpht.com/ytc/AKedOLQDR06gp26jxNNXh88Hhv1o-pNrnlKrYruqUIOx=s176-c-k-c0x00ffffff-no-rj-mo",
  "桃鈴ねね":"https://yt3.ggpht.com/bMBMxmB1YVDVazU-8KbB6JZqUHn4YzmFiQRWwEUHCeqm5REPW7HHQChC5xE6e36aqqnXgK4a=s176-c-k-c0x00ffffff-no-rj-mo",
  "獅白ぼたん":"https://yt3.ggpht.com/ytc/AKedOLQXr6MeUpHI0-yNZIAaGXHvBVowhCWMwGx-zXYs=s176-c-k-c0x00ffffff-no-rj-mo",
  "尾丸ポルカ":"https://yt3.ggpht.com/ytc/AKedOLQI_iYxOpfP8bJklQ_VnS4a9jdrwRRlre_JP1Yp=s176-c-k-c0x00ffffff-no-rj-mo",
  "ラプラス":"https://yt3.ggpht.com/15dyicQS1y53YJFewLOoharHZzZC2c5klCpfD7TDkw3myFf_-rACyL588-ZaJwHoTaoTo7KQ=s176-c-k-c0x00ffffff-no-rj-mo",
  "鷹嶺ルイ":"https://yt3.ggpht.com/KO_kRAeAQ4C4M5xJDFOFHZ79ycCRfMxttefXIDFurZE2fsVPnmlHkMdM5zjEsUTH1i97xnxKNw=s176-c-k-c0x00ffffff-no-rj-mo",
  "沙花叉クロヱ":"https://yt3.ggpht.com/wYWT2pueYH2nEP-PDUtvJwXTNUbaUXaz9UpOnHWif8vJsjsj3teqFPo1305ojToSCO9U5JHkoaQ=s176-c-k-c0x00ffffff-no-rj-mo",
  "風真いろは":"https://yt3.ggpht.com/YK_UCAbw_pFBHSOw_LGWI-WCJDdvMP3y9mmODQ1IFEnNVvcf-M3-q22Db5TLWuAbfboMNFTMIg=s176-c-k-c0x00ffffff-no-rj-mo",
  "Risu":"https://yt3.ggpht.com/ytc/AKedOLTjqfaFS9JlspGjiIah2kkxOtl4vRrxBCYKMEY5Kw=s176-c-k-c0x00ffffff-no-rj-mo",
  "Moona":"https://yt3.ggpht.com/ytc/AKedOLRaHP1Qoi3zFxbQYdbX4MNnV18TrqjFBwDxgTlNqg=s176-c-k-c0x00ffffff-no-rj-mo",
  "Iofi":"https://yt3.ggpht.com/ytc/AKedOLQNhNLAE1ECJuVKg9sO7PpiRd2g-kaq6VWB6Q69=s88-c-k-c0x00ffffff-no-rj",
  "Ollie":"https://yt3.ggpht.com/jWxru6sHDDSuKF-gztFg_WSoMp2da_d019iH0xz0MDWc7TIhetK8id_mVKV0PxWKp-QS23AzfQ=s176-c-k-c0x00ffffff-no-rj-mo",
  "Anya":"https://yt3.ggpht.com/ytc/AKedOLR0AplPQyxSjGhqMxJy7vAvXn-9hyaiXBoBE5vy=s176-c-k-c0x00ffffff-no-rj-mo",
  "Reine":"https://yt3.ggpht.com/ytc/AKedOLQfMF4yIvgoapLc07bB6a7ASN9iyGMgyE2UbwEM=s176-c-k-c0x00ffffff-no-rj-mo",
  "Gura":"https://yt3.ggpht.com/uMUat6yJL2_Sk6Wg2-yn0fSIqUr_D6aKVNVoWbgeZ8N-edT5QJAusk4PI8nmPgT_DxFDTyl8=s176-c-k-c0x00ffffff-no-rj-mo",
  "Ame":"https://yt3.ggpht.com/ytc/AKedOLTvS-8gomaJywaEKp3hnCmY92vQ9uKpy8rMAx3a=s176-c-k-c0x00ffffff-no-rj-mo",
  "Calli":"https://yt3.ggpht.com/ytc/AKedOLQi2hR9UdCcWoDLz4sJYqAu9BkaYBGWex_th5ic=s176-c-k-c0x00ffffff-no-rj-mo",
  "Kiara":"https://yt3.ggpht.com/w7TKJYU7zmamFmf-WxfahCo_K7Bg2__Pk-CCBNnbewMG-77OZLqJO9MLvDAmH9nEkZH8OkWgSQ=s176-c-k-c0x00ffffff-no-rj-mo",
  "Ina'nis":"https://yt3.ggpht.com/ytc/AKedOLRFAFjEvIwiZ_MrQvdY8-QbJkqvahsi3La78Jf7=s176-c-k-c0x00ffffff-no-rj-mo",
  "IRyS":"https://yt3.ggpht.com/UwxlX1PuB_RwJyEUW_ofbBR6saY8n5_p8A9_1bY65zygFrfqIb1GM8dIK33EJboDDnRVyw=s176-c-k-c0x00ffffff-no-rj-mo",
  "Baelz":"https://yt3.ggpht.com/GWIwRbtVQ2TAlvH8Mf37FMpemTrwmUSbTSazp9Aul6KwdKQmvx7IbLZepDk0sp8ReW3qBhsU=s176-c-k-c0x00ffffff-no-rj-mo",
  "Sana":"https://yt3.ggpht.com/t1XymJVoo8trXNJ1PeHTzaROF5wqlBYigFoYzw0HEthLahxAXjpqBi6c5ttOp9kWkYCkspivEg=s176-c-k-c0x00ffffff-no-rj-mo",
  "Fauna":"https://yt3.ggpht.com/1rUoSkwh5LJbR8ez3-l02cdoOIKt9IlhKJxkBTqoff2qZb-VV3wUTFpkE2cNDQnOjk8wR-TW=s176-c-k-c0x00ffffff-no-rj-mo",
  "Kronii":"https://yt3.ggpht.com/6670YE31bbAtAi7m_UL-KWZBdL5wvmfHlLtcS4HxsBZBQNqmAk7Y-iiIOjawO_0HYXpS4HfC=s176-c-k-c0x00ffffff-no-rj-mo",
  "Mumei":"https://yt3.ggpht.com/MI8E8Wfmc_ngNZXUwu8ad0D-OtqDhmqGVULEu25z-ccscwzJpAw-7ewFXzZYLK2jHB9d5OgQDq4=s176-c-k-c0x00ffffff-no-rj-mo"
}

function getHoloLiveStreams() {
  const holoSched = 'https://schedule.hololive.tv';
  const rawData = UrlFetchApp.fetch(holoSched).getContentText('UTF-8');
  const $ = Cheerio.load(rawData);  // HTML parser
  const livestreams = {};

  $('.thumbnail').toArray().forEach(item => {
    const pattern = /\{'event_category':'.+'/;
    const vtuber = item.attribs['onclick'].match(pattern)[0].split(":'")[1].split("',")[0];
    // border RED indicates live streaming
    const isStreaming = item.attribs['style'].search(/red/);
    const livestreamID = item.attribs['href'].split('?v=')[1];
    const avatar = holoAvatar[vtuber];
    if(isStreaming !== -1 && (vtuber in holoChID)) livestreams[vtuber] = [true, avatar, livestreamID];
  });

  return livestreams;
}

function doGet() {
  return HtmlService.createHtmlOutputFromFile("index");
}