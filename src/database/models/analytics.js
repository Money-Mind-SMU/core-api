'use strict';
module.exports = (sequelize, DataTypes) => {
  const Analytics = sequelize.define('Analytics', {
    analytic_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    total_expenses: DataTypes.DOUBLE,
    average_expenses: DataTypes.DOUBLE,
    monthly_expenses: DataTypes.DOUBLE,
    yearly_expenses: DataTypes.DOUBLE,
    date: DataTypes.DATE
  }, {});
  Analytics.associate = function(models) {
  };
  return Analytics ;
};