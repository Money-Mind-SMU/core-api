'use strict';
module.exports = (sequelize, DataTypes) => {
  const Location = sequelize.define('Location', {
    lat: DataTypes.DOUBLE,
    lng: DataTypes.DOUBLE,
    timestamp: DataTypes.DATE,
    PetId: DataTypes.INTEGER
  }, {});
  Location.associate = function(models) {
    // associations can be defined here
    models.Location.belongsTo(models.Pet);
  };
  return Location;
};