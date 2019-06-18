module.exports.requireLogin = (req, res, next) => {
    if (!req.cookies.userId) {
        res.redirect('/auth/login');
        return;
    }

    next();
};