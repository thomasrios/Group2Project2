var db = require("../models");
require("dotenv").config();


db.sequelize.sync({force:false}).then(function() {
    db.sequelize.import(__dirname + "../2022/2022/2022_QB_Rankings.xlsx")


});