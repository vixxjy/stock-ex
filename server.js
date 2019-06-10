const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port  = process.env.PORT || 8000;
require('dotenv').config()

const stockRouter = require('./routes/stockRouter');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', (req, res) => {    
    res.status(200).json('IEX Stock exchange')
});

app.use('/api/v1', stockRouter);

app.listen(port, (err) => {
    if (err) {
        console.log(err);
    }
    console.info(` 🌎 Server running on PORT: ${port}.`)
});