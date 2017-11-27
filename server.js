var http = require("http");
var taskInfo = require("./myinfo.js");

console.log(taskInfo.info[1]);

http.createServer(onRequest).listen(3000);

function onRequest(request, response) {
response.writeHead(200, { "Content-type": "text/plain" });
var randomElement = Math.floor(Math.random() * taskInfo.info.length);
response.write(taskInfo.info[randomElement]);
response.end();
}
