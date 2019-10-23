var db = require("../models");
var path = require("path")
module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Athletes.findAll({}).then(function(dbResponse) {
      res.send("index.html", dbResponse);
    });
  });

  // Load example page and pass in an example by id
  app.get("/athletes/:id", function(req, res) {
    db.Athletes.findOne({ where: { id: req.params.id } }).then(function(
      dbResponse
    ) {
      res.send("index.html", dbResponse);
    });
  });

  // Render 404 page for any unmatched routes


  
};
