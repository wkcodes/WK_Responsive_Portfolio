const http = require('http');
const fs = require('fs');
var path = require('path');

const PORT = process.env.PORT || 8080;

const server = http.createServer(function(req,res) {
    res.writeHead(200, { 'Content-type': 'text/html'})
    fs.readFile('./public/index.html', function(error, data) {
        if (error) {
            res.writeHead(404)
            res.write('Error: file not found')
        } else {
            res.write(data)
        }
        res.end();
    })
})

server.listen(PORT, function(error) {
    if(error) {
        console.log('Woops something went wrong', error)
    } else {
        console.log('Server is listening on port ' + PORT)
    }
})