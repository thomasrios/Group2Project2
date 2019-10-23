// Get references to page elements
var $athletefirstname = $("#athlete-firstname");
var $athletelastname = $("#athlete-lastname")
var $athletePosition = $("#athlete-position");
var $athleteYear = $("#athlete-year");
var $athleteHeight = $("#athlete-height");
var $athleteWeight = $("#athlete-weight");
var $athleteSchool = $("#athlete-school");
var $athleteFilm = $("#athlete-film");
var $submitBtn = $("#submit");
var $playerList = $("#player-list");

// The API object contains methods for each kind of request we'll make
var API = {
  saveAthlete: function(athlete) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/athletes",
      data: JSON.stringify(athlete)
    });
  },
  getAthlete: function() {
    return $.ajax({
      url: "api/athletes",
      type: "GET"
    });
  },
  deleteAthlete: function(id) {
    return $.ajax({
      url: "api/athletes/" + id,
      type: "DELETE"
    });
  }
};


// this code is for a dynamically generated dropdown but 
// might not be needed....
// app.get("/api/athletes", function(req, res){
//   res.json().then(function (response) {
//     // console.log(response);
//     for (var i = 0; i < 20; i++) {
//       var element = response.positions[i];
//       if (element.name) {
//         // console.log(element.name);
//         var button = $("<a>")
//         //trying to add more dropdown options
//         button.addClass("dropdown-item")
//         button.addClass("genre-select")
//         button.attr("data-genre", element.id)
//         button.text(element.name)
//         $("#genre-dropdown").append(button)
//       }
//     }
//   });
// });

// refreshExamples gets new athletes from the db and repopulates the list
var refreshAthletes = function() {
  API.getAthlete().then(function(data) {
    var $athletes = data.map(function(athlete) {
      var $a = $("<a>")
        .text(athlete.name)
        .attr("href", "/athletes/" + athlete.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": athlete.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    $playerList.empty();
    $playerList.append($athletes);
  });
};

// handleFormSubmit is called whenever we submit a new athlete
// Save the new athlete to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var athlete = {
    name: $athletefirstname.val().trim() + $athletelastname.val().trim(),
    position: $athletePosition.val().trim(),
    year: $athleteYear.val().trim(),
    height: $athleteHeight.val().trim(),
    weight: $athleteWeight.val().trim(),
    school: $athleteSchool.val().trim(),
    film: $athleteFilm.val().trim()
  };

  console.log(athlete);

  if (!(athlete.name && athlete.position && athlete.year && athlete.height && athlete.weight && athlete.school && athlete.film)) {
    alert("You must enter a value into each field!");
    return;
  }

  API.saveAthlete(athlete).then(function() {
    refreshAthletes();
  });

  $athletefirstname.val("");
  $athletelastname.val("");
  $athletePosition.val("");
  $athleteYear.val("");
  $athleteHeight.val("");
  $athleteWeight.val("");
  $athleteSchool.val("");
  $athleteFilm.val("");
};

// handleDeleteBtnClick is called when an athlete's delete button is clicked
// Remove the athlete from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteAthlete(idToDelete).then(function() {
    refreshAthletes();
  });
};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$playerList.on("click", ".delete", handleDeleteBtnClick);
