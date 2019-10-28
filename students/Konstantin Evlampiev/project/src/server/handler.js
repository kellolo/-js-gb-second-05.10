const cart = require('./cart.js');
const fs = require('fs');

const actions = {
    add: cart.add,
    modify: cart.modify
}

let handler = (req, res, action, file) => {
    fs.readFile(file, 'utf-8', (err, data) => {
        if (err) {
            res.sendStatus(404, JSON.stringify({
                result: 0,
                test: err
            }));
        } else {
            debugger
            let newCart = actions[action](JSON.parse(data), req);
            console.log(newCart);

            fs.writeFile(file, newCart, err => {
                if (err) {
                    res.sendStatus(404, JSON.stringify({
                        result: 0,
                        test: err
                    }));
                } else {
                    res.send({
                        result: 1,
                        test: "ok"
                    });
                }
            });
        };
    });
};


module.exports = handler;