const express = require('express');
const fs = require('fs');
const cartRouter = require('./cart-router.js');

let catalogPath = process.env.NODE_ENV === 'dev' ? './src/server' : './server'

console.log(process.env.NODE_ENV);
const app = express();
app.use(express.json());
app.use('/', express.static(process.env.NODE_ENV === 'dev' ? './src/public' : './public'));
//app.use('/', express.static(process.env.NODE_ENV === 'dev' ? './dist/public' : './public'));



app.use('/api/cart', cartRouter);

app.use('/api/products', (req, res) => {
    fs.readFile(catalogPath + '/database/catalog.json', (err, data) => {
        if (err) {
            res.sendStatus(404, JSON.stringify({
                result: 0,
                test: err
            }));
        } else {
            res.send(data);
        }
    })
});

app.listen(3000, () => console.log("Listening at 3000 ...."));