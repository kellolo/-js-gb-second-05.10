const express = require('express');
const fs = require('fs');
const router = require('./cartRouter');
const app = express();

app.use(express.json());
app.use('/', express.static('dist/public'));
app.use('/api/cart', router);

app.get('/api/products', (req, res) => {
    fs.readFile('dist/server/db/products.json', 'utf8', (err, data) => {
        if(err){
            res.sendStatus(404, JSON.stringify({result: 0, text: err}));
        } else {
            res.send(data);
        }
    })
});


app.listen(3000, () => console.log('Listen on port 3000...'))