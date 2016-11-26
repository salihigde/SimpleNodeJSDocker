var express = require("express");
var app = express();

app.get("/", function (req, resp) {
    resp.send("<h2>Benim Web Siteme Hoş Geldiniz! :)</h2>");
});

app.listen(8080);