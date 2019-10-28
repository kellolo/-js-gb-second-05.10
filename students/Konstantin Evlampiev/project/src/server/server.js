const express = require('express');
const fs = require('fs');
const cartRouter = require('./cart-router.js');

const app = express();
app.use(express.json());
app.use('/', express.static('./src/public'));

app.use('/api/cart', cartRouter);

app.use('/api/products', (req, res) => {
    fs.readFile('./src/server/database/catalog.json', (err, data) => {
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