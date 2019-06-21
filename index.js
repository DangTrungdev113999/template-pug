const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

mongoose.connect('mongodb://localhost:27017/something', {
    useNewUrlParser: true
});

const productRouter = require('./routers/router.product');
const userRouter = require('./routers/user.router');
const authRouter = require('./routers/auth.router');
const loginMiddleware = require('./middleware/login.middleware');


const app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cookieParser());

app.use(express.static('views/public'));
app.use(express.static('public'));

const port = 3000;

app.get('/', loginMiddleware.requireLogin,
    (req, res, next) => {
        res.render('index.pug');
    });

app.get('/test', (req, res, next) => {
    res.render('index.pug', {
        module : 'test'
    });
})

const Test = require('./models/test.model');
app.post('/test', (req, res, next) => {
    const name = req.body.name;
    const phone = req.body.phone;

    const data = new Test({
        name,
        phone
    });
    data.save();
    res.redirect('/');
});

app.use('/auth', authRouter);

// app.use('/user', userRouter);

app.use('/product', loginMiddleware.requireLogin, productRouter);

app.listen(port, () => console.log(`server listening on port ${port}!`));