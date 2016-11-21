var express = require("express");
var app = express();

app.get("/", function (req, resp) {
    resp.send("Benim Web Sitem");
});

app.listen(8080);