const fs = require ('fs')

let users = [{name: 'Ann', age: 20}, {name: 'John', age: 23}, {name: 'Vova', age: 65}]

let writeBase = function () {
    fs.readFile ('./src/server/database/test.json', 'utf-8', (err, data) => {
        if (err) {
            console.log (err)
            //return err
        } else {
            let arr = JSON.parse (data)
            users.forEach ((item) => {
                arr.push (item)
            })

            fs.writeFile ('./src/server/database/test.json', JSON.stringify (arr), err => {
                if (err) {
                    console.log (err)
                }
            })
        }
    })
}

module.exports = writeBase
