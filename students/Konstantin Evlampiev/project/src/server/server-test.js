const http = require('http');
const fs = require('fs');
const db_handler = require('./db_handler');


db_handler();

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('main page');
        res.end();
    } else if (req.url === "/users") {

        fs.readFile('./src/server/database/test.json', (err, data) => {
            if (err) {
                console.log(err);
            } else {
                res.write(data);
                res.end();
            }
        });

    }
});

server.listen(8080);

server.on('connection', () => {
    console.log('New connection');
});

console.log('server listening at 8080...');