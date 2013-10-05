/**
* homeController class
*/
(function () {

    /**
    * Constructor.
    * @param {app} - express app.
    */
    function HomeController(app) {
        this.routes(app);
    }

    /**
     * Controller routes
     * @param  {express} app
     */
    HomeController.prototype.routes = function(app) {
        app.get('/', this.index);
        app.get('/home', this.index);
        app.get('/home/index', this.index);
        app.get('/documentation', this.documentation);
        app.get('/home/documentation', this.documentation);
        app.get('/tutorial', this.tutorial);
        app.get('/home/tutorial', this.tutorial);
    };

    /**
     * [HttpGet].
     * index action
     * @param  {request} req
     * @param  {response} res
     */
    HomeController.prototype.index = function(req, res) {
        res.render('home/index');
    };

    /**
     * [HttpGet].
     * docs action
     * @param  {request} req
     * @param  {response} res
     */
    HomeController.prototype.documentation = function(req, res) {
        res.render('home/docs');
    };

    HomeController.prototype.tutorial = function(req, res) {
        res.render('home/tutorial');
    };

    module.exports = HomeController;
})();