# HoloDDer
A Google Apps Script for watching multiple YouTube livestreams of Hololive.

Darenimo Daisuki !(誰にも大好き!😻 )

<img src="./image/demo.gif" width=65%/>

Background Image Credit: [twitter@tsuru_py](https://twitter.com/tsuru_py/status/1467466242391175171)

### About
We can use it for watching multiple livestreams of Hololive members, or add other YouTube video for watching at the same time. The script will check schedule info on Hololive official website.

The project root has 2 main folders with source code: cloud & local. I made a cloud version for public deploy, everyone can use it with a Google account. The cloud version will remember user configuration with a unique hash ID on Google cloud spreadsheet when CLICK "save" button. It NEVER keep your email address or other private info.

So feel free to check the cloud version [>>here<<](https://script.google.com/macros/s/AKfycbywEBw2_-AJ5I04qP1EiVUyzWzxRuZEnHTqJeF7hrj8QRQ_bmTWv6R1aZKGXdY-7ddh/exec) or built a local version yourself.

### Setting (local version)
1. Create a new App Script project on Google Drive
2. Create all files the same as content of folder "local"
3. Add [Cheerio library for Google Apps Script](https://github.com/tani/cheeriogs)
   <br>[Script ID] : 1ReeQ6WO8kKNxoaA_O0XEQ589cIrRvEBA9qcWpNqdOP17i47u6N9M5Xh0
4. Deploy as a web application for yourself
- [Overview of Google Apps Script](https://developers.google.com/apps-script/overview)

### How to use
1. Check and save tracking list with "setting" modal (popup window)
2. We can also set an awesome fan-art background image with URL
3. Get / Update the livestream data through the 🔄 &nbsp;button
4. It will check and display all livestreams currently according to tracking list 
5. Add other YouTube livestream/video manually with the "add" modal
6. Control the video display / hidden with avatar icon on the top of page

---
### Change Log
2022-01-19
#### Fixed
- Fixed the hidden video didn't stop playing

2022-01-18
#### Added
- "Setting" modal
- "Add Video" modal
- Keep user configuration in local storage
- Keep valid avatar URLs in local storage for saving [quota](https://developers.google.com/apps-script/guides/services/quotas) usage
#### Changed
- Display channel avatar of video which is added additionally instead of default avatar
- Improve the UI/UX
#### Fixed
- The video which added additionally by user is not exist after livestream data update

2021-12-21
#### Changed
- Using CSS for livestreams display control instead of Vue list rendering
#### Fixed
- Unnecessary re-rendering for livestreams display control and stopping many livetreams afterwards

2021-12-16
#### Added
- Boostrap@5.1.1
- Cheerio as html parser
- Avatar area of VTuber for stream(iframe) display control
#### Changed
- [YouTube API](https://developers.google.com/youtube/v3/getting-started) is deprecated due to the big cost of search
- Get livestreams data from [Hololive.tv](https://schedule.hololive.tv) directly
- Improve the UI/UX
#### Fixed
- Avatar tooltip not working after livestreams data update