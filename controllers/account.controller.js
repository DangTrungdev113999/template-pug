const Account = require('../models/user.model');

module.exports.accounts = async (req, res, next) => {
    const accounts =  await  Account.find();
    res.render('index.pug', {
        module: "accounts",
        accounts  
    })
}

module.exports.addAccount = async (req, res, next) => {
    res.render('index.pug', {
        module: "addAccount"
    })
}

module.exports.postAccountInfo = async (req, res, next) => {
    req.body.image = (req.file) ?  req.file.path.split('\\').slice(1).join('\\') : '';
    await Account.create(req.body);
    res.redirect('/account');
}

module.exports.deleteAccount = async (req, res, next) => {
    const id = req.params.accountId;
    await Account.remove({_id: id}).exec((error, result) => {});
    res.redirect('/account');
}

module.exports.updateAccount = async(req, res, next) => {
    const id = req.params.accountId;
    const account = await Account.findById(id);
    res.render('index.pug', {
        module: 'updateAccount', 
        account
    })
}

module.exports.postUpdateAccount = async (req, res, next) => {
    const id = req.params.accountId;
    const account = await Account.findById(id);

    req.body.image = (req.file) ?  req.file.path.split('\\').slice(1).join('\\') : account.image;
    await Account.update(account, req.body).exec((error, result) => {});
    res.redirect('/account');
}
