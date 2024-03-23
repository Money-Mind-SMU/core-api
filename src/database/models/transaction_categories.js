'use strict';
module.exports = (sequelize, DataTypes) => {
  const TransactionCategories = sequelize.define('TransactionCategories', {
    trans_id: DataTypes.INTEGER,
    category_id: DataTypes.INTEGER
  }, {});
  TransactionCategories.associate = function(models) {
    // associations can be defined here
  };
  return TransactionCategories;
};