'use strict';
module.exports = (sequelize, DataTypes) => {
  const Temperature = sequelize.define('Temperature', {
    temperature: DataTypes.DOUBLE,
    timestamp: DataTypes.DATE,
    PetId: DataTypes.INTEGER
  }, {});
  Temperature.associate = function(models) {
    // associations can be defined here
    models.Temperature.belongsTo(models.Pet);
  };
  return Temperature;
};