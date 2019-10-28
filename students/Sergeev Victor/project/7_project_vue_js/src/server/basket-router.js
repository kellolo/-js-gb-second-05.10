const express = require ('express')
const fs = require ('fs')
const handler = require ('./handler')

const router = express.Router ()

router.get ('/', (req, res) => {
    fs.readFile ('./src/server/db/user-cart.json', 'utf-8', (err, data) => {
        if (err) {
            res.sendStatus (404, JSON.stringify ({result: 0, test: err}))
        } else {
            res.send (data)
        }
    })
})

router.post ('/', (req, res) => {
    handler (req, res, 'add', './src/server/db/user-cart.json')
})

router.put ('/plus/:id', (req, res) => {
    handler (req, res, 'changePlus', './src/server/db/user-cart.json')
})

router.put ('/minus/:id', (req, res) => {
    handler (req, res, 'changeMinus', './src/server/db/user-cart.json')
})

router.delete ('/', (req, res) => {
    handler (req, res, 'del', './src/server/db/user-cart.json')
})

module.exports = router