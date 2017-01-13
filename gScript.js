var botID = "BOTIDHERE"
var email = "pkartbot@gmail.com"


function main() {
  var threads = GmailApp.getInboxThreads();
  for(var i = 0; i < threads.length; i++){
    if(threads[i].isUnread()){
      getNewMessages(threads[i]);
    }
  }
}

function getNewMessages(thread){
  var phoneEmail = thread.getMessages()[0].getFrom();
  var phoneNumber = phoneEmail.substring(0, phoneEmail.indexOf("@"));
  if(!isNaN(phoneNumber)){
    sendPacket(phoneNumber);
    
    thread.moveToTrash();
  }
}

function sendPacket(phoneNumber){
  UrlFetchApp.fetch("https://api.groupme.com/v3/bots/post", {"method":"post", "payload":'{"bot_id":"' + botID + '","text":"' + phoneNumber + '"}'})
}