'use strict';
module.exports = (sequelize, DataTypes) => {
  const Community = sequelize.define('Community', {
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    phone: DataTypes.STRING,
    status: DataTypes.STRING
  }, {});
  Community.associate = function(models) {
    // associations can be defined here
    models.Community.belongsToMany(models.Pet, { through: 'PetCommunity' });
  };
  return Community;
};