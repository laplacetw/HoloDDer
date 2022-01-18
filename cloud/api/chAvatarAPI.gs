function doPost(e) {
  // get active sheet
  const spreadSheet = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = spreadSheet.getSheetByName("sheet1");

  const params = e.parameter;
  const method = params.method;
  const avatars = JSON.parse(params.avatars);
  const rowLength = sheet.getLastRow() === 1 ? 1 : sheet.getLastRow() - 1; // last row 
  const colLength = sheet.getLastColumn(); // last col
  const dataAll = sheet.getRange(2, 1, rowLength, colLength).getValues();
  
  if (method === "all") {
    const res = {};
    dataAll.forEach(data => res[data[0]] = data[1]);
    return ContentService.createTextOutput(JSON.stringify(res)); 
  }

  if (method === "write") {
    // Concurrency Lock
    const lock = LockService.getScriptLock();
    lock.tryLock(10000);
    
    if(lock.hasLock()) { 
      Object.keys(avatars).forEach(vtuber => {
        const avatarData = findAvatarData(dataAll, vtuber);
        if(avatarData) {
          const row = dataAll.indexOf(avatarData) + 2;  // dataAll not include title of sheet
          sheet.getRange(row, 2).setValue(avatars[vtuber]);  // avatar exist => update
        } else {
          sheet.appendRow([vtuber, avatars[vtuber]]);  // avatar not exist => append new data
        }
      });
      return ContentService.createTextOutput(true)
    } else {
      // exec timeout => send email notification
      GmailApp.sendEmail("{EMAIL_ADDRESS}", "[HoloDDer] chAvatarAPI Exec Timeout", "It's not enough for lock 10 sec !");
    }
  }

  if (method === "read") {
    const res = {};
    Object.keys(avatars).forEach(vtuber => {
      const avatarData = findAvatarData(dataAll, vtuber);
      if(avatarData) {
        res[vtuber] = avatarData[1];
      }
    });

    return ContentService.createTextOutput(JSON.stringify(res)); 
  }
}

function findAvatarData(dataAll, vtuber) {
  for(idx in dataAll) {
    if (dataAll[idx][0] === vtuber) return dataAll[idx];
  }
  return false; // vtuber not exist
}