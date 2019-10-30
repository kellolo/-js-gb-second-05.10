const fs = require('fs');

const logFile = './src/server/database/stats.json';

let actionReg = (action, good) => {
    fs.readFile(logFile, 'utf-8', (err, data) => {
        if (err) {
            res.sendStatus(404, JSON.stringify({
                result: 0,
                test: err
            }));
        } else {
            let actionArray = JSON.parse(data);
            actionArray.push({
                operation: action,
                goodId: good.id,
                goodName: good.title,
                operationTime: new Date()
            })

            fs.writeFile(logFile, JSON.stringify(actionArray, null, 4), err => {
                if (err) {
                    console.log("Error while writing stats: ", err);
                } else {
                    console.log("Transaction completed. All went fine.");
                }
            });
        };
    });
};

module.exports = actionReg