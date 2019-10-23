module.exports = function(sequelize, DataTypes) {
  var Athletes = sequelize.define("Athletes", {
    name: DataTypes.STRING,
    position: DataTypes.STRING,
    year: DataTypes.INTEGER,
    height: DataTypes.INTEGER,
    weight: DataTypes.INTEGER,
    school: DataTypes.STRING,
    film: DataTypes.STRING
  });
  return Athletes;
};