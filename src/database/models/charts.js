'use strict';
module.exports = (sequelize, DataTypes) => {
  const Charts = sequelize.define('Charts', {
    chart_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    category_id: DataTypes.INTEGER,
    month: DataTypes.INTEGER,
    year: DataTypes.INTEGER,
    total_amount: DataTypes.DOUBLE
  }, {});
  Charts.associate = function(models) {
    // associations can be defined here
  };
  return Charts;
};