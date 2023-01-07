const http = require("http");
http
  .createServer(function (req, res) {
    switch (req.url) {
      case "/":
        res.write("<h1>Hello</h1>");

        break;
      case "/hobbies.html":
        res.write("<h1>myhobbies</h1>");
        break;
      default:
        res.write("page not found");
        break;
    }
    res.end();
  })
  .listen(8080);
