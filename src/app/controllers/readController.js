async function renderPage(app,req,res) {
    const userModel = require('../models/userModel');
    const users = await userModel.getUsers();

    res.render('read', {users: users});
}

module.exports = {
    renderPage
}