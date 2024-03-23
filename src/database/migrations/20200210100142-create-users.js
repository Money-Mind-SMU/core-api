'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      user_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_email: {
        allowNull: false,
        type: Sequelize.STRING
      },
      user_name: {
        type: Sequelize.STRING
      },
      user_last_active_at: {
        type: Sequelize.DATE
      },
      user_is_verified: {
        type: Sequelize.BOOLEAN
      },
      user_oauth_type: {
        type: Sequelize.INTEGER
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('mm_users');
  }
};