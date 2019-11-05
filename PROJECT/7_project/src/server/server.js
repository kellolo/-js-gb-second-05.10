const express = require ('express')
const fs = require ('fs')
const cart = require ('./cart-router.js')

const app = express ()

app.use (express.json ())
app.use ('/', express.static ('./src/public'))
app.use ('/api/cart', cart)

app.get ('/api/products', (req, res) => {
    fs.readFile ('./src/server/db/catalog.json', 'utf-8', (err, data) => {
        if (err) {
            res.sendStatus (404, JSON.stringify ({result: 0, test: err}))
        } else {
            res.send (data)
        }
    })
})

app.listen (3000, () => {console.log ('listening at 3000')})
