'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    photo: DataTypes.STRING,
    phone: DataTypes.STRING,
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    models.User.hasMany(models.Pet);
  };
  return User;
};