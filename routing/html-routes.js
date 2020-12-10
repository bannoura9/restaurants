var path = require('path');

module.exports = function (app) {

   app.get("/tables", function (req, res) {
     res.sendFile(path.join(__dirname + "/../public/tables.html"));
   });
   //we can use "/" or just leave it empty to go to defauly in this case it is home
    app.get("/", function (req, res) {
      res.sendFile(path.join(__dirname + "/../public/home.html"));
    });
   
    app.get("/reserve", function (req, res) {
      res.sendFile(path.join(__dirname + "/../public/reserve.html"));
    });
}