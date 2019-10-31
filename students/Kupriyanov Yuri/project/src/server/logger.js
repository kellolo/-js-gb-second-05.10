const moment = require ('moment')
const fs = require ('fs')
const cfg = require ('./config.js')

const logger = (name, action) => {
    fs.readFile (cfg.urlDB ('logger.json'), 'utf-8', (err, data) => {
        if (err) {
            console.log ('log file not found')
        } else {
            let stats = JSON.parse (data)
            stats.push ({
                time: moment().format ('DD MM YYYY, hh:mm:ss'),
                action: action,
                prod_name: name
            })

            fs.writeFile (cfg.urlDB ('logger.json'), JSON.stringify (stats), err => {
                if (err) {
                    console.log ('is not able to write')
                } 
            })
        }
    })
}

module.exports = logger