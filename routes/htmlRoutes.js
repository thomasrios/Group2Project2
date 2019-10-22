var db = require("../models");

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
  app.get("*", function(req, res) {
    res.render("404.html", res);
  });

  app.get("/api/athletes", function(req, res){
    res.json().then(function (response) {
      // console.log(response);
      for (var i = 0; i < 20; i++) {
        var element = response.positions[i];
        if (element.name) {
          // console.log(element.name);
          var button = $("<a>")
          //trying to add more dropdown options
          button.addClass("dropdown-item")
          button.addClass("genre-select")
          button.attr("data-genre", element.id)
          button.text(element.name)
          $("#genre-dropdown").append(button)
        }
      }
    });
  })
};
