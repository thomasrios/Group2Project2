var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/athletes", function(req, res) {
    db.Athletes.findAll({}).then(function(dbResponse) {
      res.json(dbResponse);
    });
  });

  // Create a new example
  app.post("/api/athletes", function(req, res) {
    db.Athletes.create(req.body).then(function(dbResponse) {
      res.json(dbResponse);
    });
  });

  // Delete an example by id
  app.delete("/api/athletes/:id", function(req, res) {
    db.Athletes.destroy({ where: { id: req.params.id } }).then(function(
      dbResponse
    ) {
      res.json(dbResponse);
    });
  });
};
