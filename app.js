const http = require('http');
const fs = require('fs')
function requestListener(request, response)
  {
    const url = request.url;
    const method = request.method;
    if ( url === '/')
      {
        response.setHeader('Content-type', 'text-html')
        response.write('<html>')
        response.write('<head><title>Enter message</title></head>')
        response.write('<body><form action="/message" method="POST" name="message"><input type="text"><button type="submit">Submit</button></input></form></body>')
        response.write('</html>')
        response.end();
      }
    else if ( url === '/message' && method === 'POST')
      {
        fs.writeFileSync('message.txt', 'random text');
        response.statusCode = 302;
        response.setHeader('location', '/');
        return response.end

      }
    response.setHeader('Content-type', 'text-html')
    response.write('<html>')
    response.write('<head><title>my first page</title></head>')
    response.write('<body>Thats a return from a http server</body>')
    response.write('</html>')
    response.end();
  }
const server = http.createServer(requestListener);
// http.createServer(function(resquest, response)
//   {
  //     console.log("a anonymous function with nothing")
  //   });
  // http.createServer((request, response) => 
  // {
  // });
server.listen(3000);