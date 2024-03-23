'use strict';
module.exports = (sequelize, DataTypes) => {
  const Transactions = sequelize.define('Transactions', {
    trans_id: DataTypes.INTEGER,
    trans_type: DataTypes.INTEGER,
    trans_title: DataTypes.STRING,
    trans_description: DataTypes.STRING,
    trans_amount: DataTypes.DOUBLE,
    category_id: DataTypes.INTEGER,
    trans_created: DataTypes.DATE,
    user_id: DataTypes.INTEGER,
    billing_image_url: DataTypes.STRING
  }, {});
  Transactions.associate = function(models) {
    // associations can be defined here
  };
  return Transactions;
};