const fs = require('fs');
const express = require('express');
const handler = require('./handler.js');

const router = express.Router()

let mainPath = process.env.NODE_ENV === 'dev' ? './src/server' : './server'


router.get('/', (req, res) => {
    fs.readFile(mainPath + '/database/user-cart.json', 'utf-8', (err, data) => {
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
    handler(req, res, 'add', mainPath + '/database/user-cart.json');
});

router.put('/:id', (req, res) => {
    handler(req, res, 'modify', mainPath + '/database/user-cart.json')
});

router.delete('/:id', (req, res) => {
    handler(req, res, 'delete', mainPath + '/database/user-cart.json')
});

module.exports = router