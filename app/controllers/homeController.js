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
        app.get('/documentation/architecture', this.architecture);
        app.get('/documentation/cli', this.cli);
        app.get('/documentation/models', this.models);
        app.get('/documentation/controllers', this.controllers);
        app.get('/documentation/api', this.api);
        app.get('/documentation/dal', this.dal);
        app.get('/documentation/views', this.views);
        app.get('/documentation/database', this.database);
        app.get('/documentation/middleware', this.middleware);
        app.get('/documentation/logging', this.logging);
        app.get('/tutorial', this.tutorial);
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

        /**
     * [HttpGet].
     * tutorial action
     * @param  {request} req
     * @param  {response} res
     */
    HomeController.prototype.architecture = function(req, res) {
        res.render('home/architecture');
    };

        /**
     * [HttpGet].
     * tutorial action
     * @param  {request} req
     * @param  {response} res
     */
    HomeController.prototype.cli = function(req, res) {
        res.render('home/cli');
    };

        /**
     * [HttpGet].
     * tutorial action
     * @param  {request} req
     * @param  {response} res
     */
    HomeController.prototype.models = function(req, res) {
        res.render('home/models');
    };

        /**
     * [HttpGet].
     * tutorial action
     * @param  {request} req
     * @param  {response} res
     */
    HomeController.prototype.controllers = function(req, res) {
        res.render('home/controllers');
    };

        /**
     * [HttpGet].
     * tutorial action
     * @param  {request} req
     * @param  {response} res
     */
    HomeController.prototype.api = function(req, res) {
        res.render('home/api');
    };

        /**
     * [HttpGet].
     * tutorial action
     * @param  {request} req
     * @param  {response} res
     */
    HomeController.prototype.dal = function(req, res) {
        res.render('home/dal');
    };

        /**
     * [HttpGet].
     * tutorial action
     * @param  {request} req
     * @param  {response} res
     */
    HomeController.prototype.views = function(req, res) {
        res.render('home/views');
    };

        /**
     * [HttpGet].
     * tutorial action
     * @param  {request} req
     * @param  {response} res
     */
    HomeController.prototype.database = function(req, res) {
        res.render('home/database');
    };

        /**
     * [HttpGet].
     * tutorial action
     * @param  {request} req
     * @param  {response} res
     */
    HomeController.prototype.middleware = function(req, res) {
        res.render('home/middleware');
    };

        /**
     * [HttpGet].
     * tutorial action to show logging page
     * @param  {request} req
     * @param  {response} res
     */
    HomeController.prototype.logging = function(req, res) {
        res.render('home/logging');
    };

    /**
     * [HttpGet].
     * tutorial action
     * @param  {request} req
     * @param  {response} res
     */
    HomeController.prototype.tutorial = function(req, res) {
        res.render('home/tutorial');
    };

    module.exports = HomeController;
})();