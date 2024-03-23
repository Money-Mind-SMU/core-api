'use strict';
module.exports = (sequelize, DataTypes) => {
  const Categories = sequelize.define('Categories', {
    category_id: DataTypes.DOUBLE,
    category_name: DataTypes.STRING,
    category_type: DataTypes.INTEGER,
  }, {});
  Categories.associate = function(models) {
    // associations can be defined here
  };
  return Categories;
};