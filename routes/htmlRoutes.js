var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Athletes.findAll({}).then(function(dbExamples) {
      res.render("index.html", dbExamples);
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Athletes.findOne({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.render("example.html");
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404.html");
  });
};
