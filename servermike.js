var bodyParser = require('body-parser');
var express = require('express');
var app = express();
var path = require('path');
var PORT = process.env.PORT || 8080


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

require("./routing/api-routes.js")(app);
require('./routing/html-routes.js') (app);

app.listen(PORT, function () {
   console.log("App is listening on port" + PORT);
});