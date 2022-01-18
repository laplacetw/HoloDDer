function doPost(e) {
  // get active sheet
  const spreadSheet = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = spreadSheet.getSheetByName("sheet1");

  const params = e.parameter;
  const method = params.method;
  const user = params.user;
  const rowLength = sheet.getLastRow() === 1 ? 1 : sheet.getLastRow() - 1; // last row 
  const colLength = sheet.getLastColumn(); // last col
  const dataAll = sheet.getRange(2, 1, rowLength, colLength).getValues();
  const userData = findUserData(dataAll, user);

  if (method === "write") {
    const bgImg = params.bgImg.replace(/"'<>/g);  // invalid char
    const vtuber = params.vtuber.toString();

    // Concurrency Lock
    const lock = LockService.getScriptLock();
    lock.tryLock(10000);
    
    if (lock.hasLock()) { 
      if (userData) {
      const row = dataAll.indexOf(userData) + 2;  // dataAll not include title of sheet
      sheet.getRange(row, 2).setValue(bgImg);  // user exist => update
      sheet.getRange(row, 3).setValue(vtuber);  // user exist => update
      return ContentService.createTextOutput(true)
      } else {
        sheet.appendRow([user, bgImg, vtuber]);  // user not exist => append new data
        return ContentService.createTextOutput(true)
      }
    } else {
      // exec timeout => send email notification
      GmailApp.sendEmail("{EMAIL_ADDRESS}", "[HoloDDer] userConfigAPI Exec Timeout", "It's not enough for lock 10 sec !");
    }
  }

  if (method === "read") {
    if (userData){
      const res = {
        "user": userData[0],
        "bgImg": userData[1],
        "vtuber": userData[2]
      }
      return ContentService.createTextOutput(JSON.stringify(res)); 
    } else {
      return ContentService.createTextOutput(userData); // userData => false
    }
  }
}

function findUserData(dataAll, user) {
  for(idx in dataAll) {
    if (dataAll[idx][0] === user) return dataAll[idx];
  }
  return false; // user not exist
}