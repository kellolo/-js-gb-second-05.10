const fs = require('fs');
const express = require('express');
const handler = require('./handler.js');

const router = express.Router()


router.get('/', (req, res) => {
    fs.readFile('./src/server/database/user-cart.json', 'utf-8', (err, data) => {
        if (err) {
            res.sendStatus(404, JSON.stringify({
                result: 0,
                test: err
            }));
        } else {
            res.send(data);
        }
    })
})

router.post('/', (req, res) => {
    handler(req, res, 'add', './src/server/database/user-cart.json');
});

router.put('/:id', (req, res) => {
    handler(req, res, 'modify', './src/server/database/user-cart.json')
});

router.delete('/:id', (req, res) => {
    handler(req, res, 'delete', './src/server/database/user-cart.json')
});

module.exports = router