module.exports = function(app) {
    app.get('/create', (req,res)=>{
        require('../controllers/createController.js').renderPage(app,req,res);
    });
    app.post('/create', (req,res)=>{
        require('../controllers/createController.js').createUser(app,req,res);
    });
}