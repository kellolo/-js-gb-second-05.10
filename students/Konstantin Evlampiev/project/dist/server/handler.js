const cart = require('./cart.js');
const fs = require('fs');
const actionReg = require('./stats.js');

const actions = {
    add: cart.add,
    modify: cart.modify,
    delete: cart.remove
}

let handler = (req, res, action, file) => {
    fs.readFile(file, 'utf-8', (err, data) => {
        if (err) {
            res.sendStatus(404, JSON.stringify({
                result: 0,
                test: err
            }));
        } else {
            let cartItem = JSON.parse(data);
            let newCart = actions[action](cartItem, req);

            fs.writeFile(file, JSON.stringify(newCart.basket, null, 4), err => {
                if (err) {
                    res.sendStatus(404, JSON.stringify({
                        result: 0,
                        test: err
                    }, null, 4));
                } else {
                    res.send({
                        result: 1,
                        test: "ok"
                    });
                    actionReg(action, newCart.name);
                }
            });
        };
    });
};


module.exports = handler;