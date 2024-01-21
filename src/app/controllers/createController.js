function renderPage(app,req,res) {
    res.render('create');
}
async function createUser(app,req,res) {
    const userModel = require('../models/userModel');
    const data = req.body;

    await userModel.createUser(data);

    res.redirect('/read');
}


module.exports = {
    renderPage,
    createUser
}