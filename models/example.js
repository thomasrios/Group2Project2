module.exports = function(sequelize, DataTypes) {
  var Athletes = sequelize.define("Athletes", {
    position: DataTypes.STRING,
    year: DataTypes.INTEGER
  });
  return Athletes;
};
