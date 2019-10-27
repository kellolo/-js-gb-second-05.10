const moment = require('moment');
const fs = require('fs');

const logger = (name, action) => {
    fs.readFile('dist/server/db/stats.json', 'utf8', (err, data) => {
        if(err){
            console.log('Can`t read file')
        } else {
            const stat = JSON.parse(data);
            stat.push({
                time: moment().format('MMMM Do YYYY, h:mm:ss a'),
                prod_name: name,
                action: action
            });
            fs.writeFile('dist/server/db/stats.json', JSON.stringify(stat, null, 4), (err) => {
                if(err){
                    console.log('Can`t write file')
                }
            })
        }
    })
};

module.exports = logger;