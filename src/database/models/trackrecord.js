'use strict';
module.exports = (sequelize, DataTypes) => {
  const TrackRecord = sequelize.define('TrackRecord', {
    timestamp: DataTypes.DATE,
    notes: DataTypes.STRING,
    weight: DataTypes.DOUBLE,
    tall: DataTypes.DOUBLE,
    PetId: DataTypes.INTEGER
  }, {});
  TrackRecord.associate = function(models) {
    // associations can be defined here
    models.TrackRecord.belongsTo(models.Pet);
  };
  return TrackRecord;
};