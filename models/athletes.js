module.exports = function(sequelize, DataTypes) {
  var Athletes = sequelize.define("Athletes", {
    name: DataTypes.STRING,
    position: DataTypes.STRING,
    year: DataTypes.INTEGER,
    height: DataTypes.DECIMAL,
    weight: DataTypes.INTEGER,
    school: DataTypes.STRING
  });
  return Athletes;
};