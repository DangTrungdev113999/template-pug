const express = require('express');
const mongoose = require('mongoose');

const productRouter = require('./routers/router.product.js');

mongoose.connect('mongodb://localhost:27017/something', {useNewUrlParser: true});

const app = express();

app.set('view engine', 'pug');
app.set('views', './views');


app.use(express.static('views/public'));

const port = 3000;

app.get('/', (req, res, next) => {
    res.render('index.pug');
});

app.use('/product', productRouter);

app.listen(port, () => console.log(`server listening on port ${port}!`));