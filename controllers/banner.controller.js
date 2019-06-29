const Banner = require('../models/banner.model');

module.exports.banners = async (req, res, next) => {
    const banners = await Banner.find();
    res.render('admin/index.pug', {
        module: "banners",
        banners
    });
}

module.exports.addBanner = async (req, res, next) => {
    res.render('admin/index.pug', {
        module: "addBanner"
    });
}

module.exports.postBanner = async (req, res, next) => {
    req.body.status = ( req.body.status) ?  req.body.status : '';
    await Banner.create(req.body);
    res.redirect('/admin/banner');
}

module.exports.updateBanner = async (req, res, next) => {
    const id = req.params.bannerId;
    const banner = await Banner.findById(id);

    res.render('admin/index.pug', {
        module: 'updateBanner',
        banner
    })
}

module.exports.postUpdateBanner = async (req, res, next) => {
    const id = req.params.bannerId;
    const banner = await Banner.findById(id);

    req.body.image = (req.file) ? 
                    (req.file.path.split('\\').slice(1).join('\\')) : 
                    banner.image;

    await Banner.update(banner, req.body).exec((error, result) => {});

    res.redirect('/admin/banner');
}

module.exports.deleteBanner = async (req, res, next) => {
    const id = req.params.bannerId;
    await Banner.remove({_id: id}).exec((error, result) => {});
    res.redirect('/admin/banner');
}