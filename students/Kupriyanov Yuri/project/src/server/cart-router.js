const express = require ('express')
const fs = require ('fs')
const handler = require ('./handler')
const cfg = require ('./config.js')

const router = express.Router ()

router.get ('/', (req, res) => {
    fs.readFile (cfg.urlDB('user-cart.json'), 'utf-8', (err, data) => {
        if (err) {
            res.sendStatus (404, JSON.stringify ({result: 0, test: err}))
        } else {
            res.send (data)
        }
    })
})

router.post ('/', (req, res) => {
    handler (req, res, 'add', cfg.urlDB('user-cart.json'))
})

router.put ('/:id', (req, res) => {
    handler (req, res, 'change', cfg.urlDB('user-cart.json'))
})

router.delete ('/:id', (req, res) => {
    handler (req, res, 'remove', cfg.urlDB('user-cart.json'))
})

module.exports = router