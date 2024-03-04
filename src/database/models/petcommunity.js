'use strict';
module.exports = (sequelize, DataTypes) => {
  const PetCommunity = sequelize.define('PetCommunity', {
    PetId: DataTypes.INTEGER,
    CommunityId: DataTypes.INTEGER
  }, {});
  PetCommunity.associate = function(models) {
    // associations can be defined here
    models.PetCommunity.belongsTo(models.Pet);
    models.PetCommunity.belongsTo(models.Community);
  };
  return PetCommunity;
};