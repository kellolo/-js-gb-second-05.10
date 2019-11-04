const http = require ('http')
const handler = require ('./db_handler')
const fs = require ('fs')

handler ()

const server = http.createServer ((req, res) => {
    if (req.url === '/') {
        res.write ('main page')
        res.end ()
    } else if (req.url === '/users') {

        fs.readFile ('./src/server/database/test.json', 'utf-8', (err, data) => {
            if (err) {
                console.log (err)
            } else {
                res.write (data)
                res.end ()
            }
        })
        
    }
})

server.listen (8080)

server.on ('connection', () => {
    console.log ('new connection')
})

console.log ('server listening at 8080...')