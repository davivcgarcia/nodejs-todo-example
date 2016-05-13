module.exports = function(app) {

  // Simple route for initial app page.
  app.get('/', function(req, res) {
    res.render('index');
  });

};
