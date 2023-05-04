let http = require("http");
let url = require("url");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-type": "text/html" });
    res.write("req.url: " + req.url + "<br>");

    let parsedUrl = url.parse(req.url, true);
    res.write("parsedUrl.pathname: " + parsedUrl.pathname);
    res.write("parsedUrl.query: " + JSON.stringify(parsedUrl.query));
    res.end();
  })
  .listen(8000);
