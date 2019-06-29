module.exports.requireLogin = (req, res, next) => {
    if (!req.cookies.userId) {
        res.redirect('/admin/auth/login');
        return;
    }

    next();
};