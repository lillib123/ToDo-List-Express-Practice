var express = require("express");
var routes = express.Router();

routes.get("/", function(req, res) {
  res.send("this is your baseline endpoint");
});
routes.get("/get", function(req, res) {
  res.send("GET request successful");
  console.log("GET request sucessful");
});
routes.delete("/delete", function(req, res) {
  res.send("DELETE request successful");
  console.log("DELETE request successful");
});
routes.post("/post", function(req, res) {
  res.send("POST request successful");
  console.log("POST request successful");
});
routes.put("/put", function(req, res) {
  res.send("PUT request successful");
  console.log("PUT request successful");
});

module.exports = routes;
