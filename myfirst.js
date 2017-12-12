var http = require('http');
var dt = require('./myfirstmodule');

http.createServer(function (req, res) { // create a server object
    // HTTP 서버의 응답을 HTML로 표시하려면 HTTP 헤더를 포함해야 한다.
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("The date and time are currently: " + dt.myDateTime());
    res.end(); // end the response
}).listen(8080); // the server object listens on port 8080
