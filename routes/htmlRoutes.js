var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Athletes.findAll({}).then(function(dbResponse) {
      res.render("index.html", dbResponse);
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Athletes.findOne({ where: { id: req.params.id } }).then(function(
      dbResponse
    ) {
      res.render("example.html", dbResponse);
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404.html");
  });
};
