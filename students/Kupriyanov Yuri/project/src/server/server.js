const express = require ('express')
const fs = require ('fs')
const cart = require ('./cart-router.js')
const cfg = require ('./config.js')

const app = express ()

app.use (express.json ())
app.use ('/', express.static ( cfg.urlPublic('') ))
app.use ('/api/cart', cart)

app.get ('/api/products', (req, res) => {
    fs.readFile ( cfg.urlDB ('catalog.json'), 'utf-8', (err, data) => {
        if (err) {
            res.sendStatus (404, JSON.stringify ({result: 0, test: err}))
        } else {
            res.send (data)
        }
    })
})

app.listen (3000, () => {console.log ('listening at 3000')})
