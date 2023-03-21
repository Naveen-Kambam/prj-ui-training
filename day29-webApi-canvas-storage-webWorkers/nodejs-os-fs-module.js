const os = require("os");
const fs = require("fs");

console.log(os.arch());

console.log(os.freemem());

console.log(os.totalmem());

console.log(os.hostname());

fs.writeFile("logs.txt", "hello world", "utf-8", function (err) {
  if (err) {
    console.log("error");
  } else {
    console.log("data saved");
  }
});

fs.appendFile("logs.txt", "new hello world", "utf-8", function (err) {
    if (err) {
      console.log("error");
    } else {
      console.log("data saved");
    }
  });

  fs.readFile("logs.txt", function (err, data) {
    if (err) {
      console.log("error");
    } else {
      console.log(data);
      console.log(data.toString());
    }
  });
  
  fs.rename("logs.txt", "devLogs.txt", () => {
    console.log("rename done");
  });
  
  fs.unlink("devLogs.txt", () => {
    console.log("deleted");
  });
