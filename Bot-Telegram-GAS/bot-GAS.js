var token = "TokenBot";
var SheetID = "SheetID";

function doPost(e) {
  var stringJson = e.postData.getDataAsString();
  var updates = JSON.parse(stringJson);
 
    if(updates.message.text){
      sendText(updates.message.chat.id,CariODPDariIDSheet(updates.message.text)); 
    }
}

function AmbilSheet1(){
  var rangeName = 'Sheet1!A2:J';
  var rows = Sheets.Spreadsheets.Values.get(SheetID, rangeName).values;
  return rows;
}

function AmbilSheet2(){
  var rangeName = 'Sheet2!A2:C';
  var rows = Sheets.Spreadsheets.Values.get(SheetID, rangeName).values;
  return rows;
}

function CariODPDariIDSheet(IDodp){
  var dataODP = AmbilSheet1();
  for (var row = 0; row < dataODP.length; row++) {
    if(dataODP[row][0]==IDodp){ 
      return dataODP[row][0] + "\n" +
             "(Kap : " + dataODP[row][2] + " / Avai : " + dataODP[row][1] + ") \n" +
             "Koordinat : " + dataODP[row][3] + ", " + dataODP[row][4] + "\n" +
             "Address : " + dataODP[row][5] + "\n" +
             "Status : " + dataODP[row][6] + "\n" +
             "OLT : " + dataODP[row][7] + "(" + dataODP[row][8] + ")" + "\n" +
             "ODP VALIND : " + dataODP[row][9] + "\n" + "\n" +
             "https://www.google.com/maps/place/" + dataODP[row][3] + "," + dataODP[row][4];
    }
  }
  
  var dataODP = AmbilSheet2();
  for (var row = 0; row < dataODP.length; row++) {
    if(dataODP[row][0]==IDodp){ 
      return dataODP[row][1] + "\n" + dataODP[row][2];
    }
  }
  
  return "ODP/Perintah tidak ditemukan, klik /info untuk melihat cara mencari ODP dengan benar.";
}

function sendText(chatid,text,replymarkup){
var data = {
    method: "post",
    payload: {
      method: "sendMessage",
      chat_id: String(chatid),
      text: text,
      parse_mode: "HTML",
      reply_markup: JSON.stringify(replymarkup)
    }
  };
  UrlFetchApp.fetch('https://api.telegram.org/bot' + token + '/', data);
}
