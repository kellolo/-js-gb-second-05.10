const cart = require ('./cart.js')
const fs = require ('fs')
const logger = require ('./logger')

const actions = {
    add: cart.add,
    change: cart.change,
    remove: cart.remove
}

let handler = (req, res, action, file) => {
    fs.readFile ('./src/server/db/user-cart.json', 'utf-8', (err, data) => {
        if (err) {
            res.sendStatus (404, JSON.stringify ({result: 0, test: err}))
        } else {
            let {newCart, name} = actions [action] (JSON.parse (data), req)
            fs.writeFile (file, newCart, err => {
                if (err) {
                    res.sendStatus (404, JSON.stringify ({result: 0, test: err}))
                } else {
                    logger (name, action)
                    res.send ({result: 1, test: 'ok'})
                }
            })
        }
    })
}

module.exports = handler