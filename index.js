const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

mongoose.connect('mongodb://localhost:27017/something', {
    useNewUrlParser: true
});

const authRouter = require('./routers/auth.router');
const loginMiddleware = require('./middleware/login.middleware');
const productRouter = require('./routers/product.router');
const accountRouter = require('./routers/account.router');
const bannerRouter = require('./routers/banner.router');

const app = express();

app.use(express.static('public'));
app.use(express.static('views/public'));

app.set('view engine', 'pug');
app.set('views', './views');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cookieParser());


const port = 3000;


app.get('/admin', loginMiddleware.requireLogin,
(req, res, next) => {
    res.render('admin/index.pug');
});
app.use('/admin/auth', authRouter);
app.use('/admin/product', loginMiddleware.requireLogin, productRouter);
app.use('/admin/account', loginMiddleware.requireLogin, accountRouter);
app.use('/admin/banner', loginMiddleware.requireLogin, bannerRouter);

app.get('/', (req, res, next) => {
    res.render('user/index.pug');
})

app.listen(port, () => console.log(`server listening on port ${port}!`));