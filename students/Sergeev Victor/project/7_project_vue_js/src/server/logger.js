const moment = require('moment');
const fs = require('fs');

const logger = (name, action) => {
    fs.readFile('src/server/db/stats.json', 'utf8', (err, data) => {
        if(err){
            console.log('Warning: reading the file is unimpossible...')
        } else {
            const stat = JSON.parse(data);
            stat.push({
                product_name: name,
                time: moment().format('MMMM Do YYYY, h:mm:ss a'),
                action: action
            });
            fs.writeFile('src/server/db/stats.json', JSON.stringify(stat, null, 4), (err) => {
                if(err){
                    console.log('Warning: writing to the file is unimpossible...')
                }
            })
        }
    })
};

module.exports = logger;