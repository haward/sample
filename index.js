const messages = require("./message.json");
const moment = require("moment");
var fs = require('fs');

// console.log(messages);
messages.map(item => {
  // console.log(item.created_time);
  item.created_time = moment(item.created_time).format("YYYYMMDDhhmm");
})

// fs.writeFile('message-update.json', JSON.stringify(messages));
var outputFilename = 'message-update.json';

fs.writeFile(outputFilename, JSON.stringify(messages, null, 4), function(err) {
    if(err) {
      console.log(err);
    } else {
      console.log("JSON saved to " + outputFilename);
    }
}); 

