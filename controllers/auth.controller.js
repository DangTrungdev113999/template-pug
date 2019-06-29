const User = require('../models/user.model');

module.exports.login = (req, res, next) => {
    res.render('admin/auth/login');
}

module.exports.postLogin = async (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    
    const user = await User.findOne({email});

    if (!user) {
        res.render('auth/login', {
            error: [
                'Email dose not exists'
            ]
        });
        return;
    }

    if (user.password !== password) {
        res.render('auth/login', {
            error: [
                'wrong password'
            ]
        });
        return;
    }

    res.cookie('userId', user._id);
    res.redirect('/admin');
}

module.exports.logout = async (req, res, next) => {
    res.clearCookie('userId');
    res.redirect('/admin');
}