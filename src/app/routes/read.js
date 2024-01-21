module.exports = function(app){
    app.get('/read', (req,res)=>{
        require('../controllers/readController.js').renderPage(app,req,res);
    });
}