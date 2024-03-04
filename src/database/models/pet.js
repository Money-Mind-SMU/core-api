'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pet = sequelize.define('Pet', {
    name: DataTypes.STRING,
    kind: DataTypes.STRING,
    breed: DataTypes.STRING,
    photo: DataTypes.STRING,
    year: DataTypes.INTEGER,
    food: DataTypes.STRING,
    furColor: DataTypes.STRING,
    furType: DataTypes.STRING,
    gender: DataTypes.STRING,
    UserId: DataTypes.INTEGER,
    lat: DataTypes.DOUBLE,
    lng: DataTypes.DOUBLE,
    temp: DataTypes.DOUBLE,
  }, {});
  Pet.associate = function(models) {
    // associations can be defined here
    models.Pet.belongsTo(models.User);
    models.Pet.hasMany(models.Location);
    models.Pet.hasMany(models.TrackRecord);
    models.Pet.hasMany(models.Temperature);
    models.Pet.belongsToMany(models.Community, { through: 'PetCommunity' });
  };
  return Pet;
};