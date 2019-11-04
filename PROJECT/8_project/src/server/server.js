const express = require ('express')
const fs = require ('fs')
const cart = require ('./cart-router.js')

const app = express ()

app.use (express.json ())
//app.use ('/', express.static ('./dist/public'))
app.use ('/cart', cart)


app.get ('/products', (req, res) => {
    fs.readFile ('./src/server/db/catalog.json', 'utf-8', (err, data) => {
        if (err) {
            res.sendStatus (404, JSON.stringify ({result: 0, test: err}))
        } else {
            res.send (data)
        }
    })
})

app.listen (5000, () => {console.log ('listening at 3000')})
