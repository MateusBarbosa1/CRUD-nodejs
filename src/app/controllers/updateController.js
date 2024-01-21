async function renderPage(app,req,res) {
    const userModel = require('../models/userModel');
    const users = await userModel.getUsers();

    res.render('update', {id: req.params.id, users: users})
}

async function updateUser(app,req,res) {
    const userModel = require('../models/userModel');
    await userModel.updateUser(req.params.id,req.body);

    res.redirect('/read');
}

module.exports = {
    renderPage,
    updateUser
}