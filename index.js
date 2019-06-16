const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost:27017/something', {
    useNewUrlParser: true
});

const productRouter = require('./routers/router.product.js');


const app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static('views/public'));
app.use(express.static('public'));

const port = 3000;

app.get('/', (req, res, next) => {
    res.render('index.pug');
});

app.use('/product', productRouter);

app.listen(port, () => console.log(`server listening on port ${port}!`));