module.exports = function(app) {
    app.get('/update/:id', (req,res)=>{
        require('../controllers/updateController').renderPage(app,req,res);
    });
    app.post('/update/:id', (req,res)=>{
        require('../controllers/updateController').updateUser(app,req,res);
    });
}