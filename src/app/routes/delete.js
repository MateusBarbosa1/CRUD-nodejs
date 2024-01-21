module.exports = function(app){
    app.get('/delete/:id', (req,res)=>{
        require('../controllers/deleteController.js').deleteUser(app,req,res);
    });
}