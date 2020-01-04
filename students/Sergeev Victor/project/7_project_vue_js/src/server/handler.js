const basket = require ('./basket.js')
const fs = require ('fs')
const logger = require("./logger")

const actions = {
    add: basket.add,
    change: basket.change,
    del: basket.remove
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
                    //console.log(req.body)
                    logger(name, action)
                    res.send ({result: 1, test: 'ok'})
                }
            })
        }
    })
}

module.exports = handler