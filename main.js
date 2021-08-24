var http = require('http');
var fs = require('fs');
var app = http.createServer(function (request, response) {
    if (request.url == '/' || request.url == '/index.html') {
        fs.readFile('./index.html', null, function (error, data) {
            if (error) {
                response.writeHead(404);
                response.write('File not found');
            }
            else {
                response.write(data);
            }
            response.end();
        });
    }

    if (request.url == '/html/main') {
        fs.readFile('./html/main_client.html', null, function (error, data) {
            if (error) {
                response.writeHead(404);
                response.write('File not found');
            }
            else {
                response.write(data);
            }
            response.end();
        });
    }
    if (request.url == '/html/Join') {
        fs.readFile('./html/Join.html', null, function (error, data) {
            if (error) {
                response.writeHead(404);
                response.write('File not found');
            }
            else {
                response.write(data);
            }
            response.end();
        });
    }
    if (request.url == '/Join') {
        fs.readFile('./html/Join.html', null, function (error, data) {
            if (error) {
                response.writeHead(404);
                response.write('File not found');
            }
            else {
                response.write(data);
            }
            response.end();
        });
    }
    if (request.url == '/index_2') {
        fs.readFile('./html/index_2.html', null, function (error, data) {
            if (error) {
                response.writeHead(404);
                response.write('File not found');
            }
            else {
                response.write(data);
            }
            response.end();
        });
    }
    if (request.url == '/html/MeetingCheck') {
        fs.readFile('./html/Join.html', null, function (error, data) {
            if (error) {
                response.writeHead(404);
                response.write('File not found');
            }
            else {
                response.write(data);
            }
            response.end();
        });
    }
    if (request.url == '/html/Login') {
        fs.readFile('./html/Login.html', null, function (error, data) {
            if (error) {
                response.writeHead(404);
                response.write('File not found');
            }
            else {
                response.write(data);
            }
            response.end();
        });
    }

    if (request.url == '/js/main_client') {
        fs.readFile('./js/main_client.js', null, function (error, data) {
            if (error) {
                response.writeHead(404);
                response.write('File not found');
            }
            else {
                response.write(data);
            }
            response.end();
        });
    }
});
app.listen(3000);