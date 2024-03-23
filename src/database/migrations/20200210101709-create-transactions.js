'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('mm_transactions', {
      trans_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      trans_type: {
        type: Sequelize.INTEGER
      },
      trans_title: {
        type: Sequelize.STRING
      },
      trans_description: {
        type: Sequelize.STRING
      },
      trans_amount: {
        type: Sequelize.DOUBLE
      },
      category_id: {
        type: Sequelize.INTEGER
      },
      trans_created: {
        type: Sequelize.DATE
      },
      user_id: {
        type: Sequelize.INTEGER
      },
      billing_image_url: {
        type: Sequelize.STRING
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('mm_transactions');
  }
};