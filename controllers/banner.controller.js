const Banner = require('../models/banner.model');

module.exports.banners = async (req, res, next) => {
    const banners = await Banner.find();
    res.render('index.pug', {
        module: "banners",
        banners
    });
}

module.exports.addBanner = async (req, res, next) => {
    res.render('index.pug', {
        module: "addBanner"
    });
}

module.exports.postBanner = async (req, res, next) => {
    req.body.status = ( req.body.status) ?  req.body.status : '';
    await Banner.create(req.body);
    res.redirect('/banner');
}

module.exports.updateBanner = async (req, res, next) => {
    const id = req.params.bannerId;
    const banner = Banner.findById(id);

    res.render('index.pug', {
        module: 'updateBanner',
        banner
    })
}