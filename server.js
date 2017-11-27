var http = require("http");
var taskInfo = require("./myinfo.js");
var express = require("express");
var toDo = require("./todo-routes.js");
var app = express();

app.use(express.static(__dirname + "/public"));
app.use("/", toDo);

var server = app.listen(3000, function() {
  var port = server.address().port;
});
