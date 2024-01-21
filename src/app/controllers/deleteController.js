async function deleteUser(app,req,res) {
    const userModel = require('../models/userModel');
    const id = req.params.id;

    await userModel.deleteUser(id);

    res.redirect('/read');
}
module.exports = {
    deleteUser
}