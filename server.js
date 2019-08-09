const http = require('http');
const fs = require('fs');

fs.readFile('./index.html', function (err, html){
  if (err){
    throw err;
  }
  let handleRequest = function(request, response) {
    response.writeHead(200, {
      'Content-Type': 'text/html'
    });
    response.write(html)
    response.end();
  };
  let server = http.createServer(handleRequest).listen(8000);
  console.log("Server running on http://localhost:8000")

})

//
// let handleRequest = function(request, response) {
//   response.writeHead(200, {
//     'Content-Type': 'text/plain'
//   });
//   response.write(html)
//   response.end('Hello World whee\n');
// };
// let server = http.createServer(handleRequest);
//
// server.listen(8000);
// console.log("Server running on http://localhost:8000")
