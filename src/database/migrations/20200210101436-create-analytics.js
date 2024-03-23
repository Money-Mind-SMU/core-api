'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('mm_analytic', {
      analytic_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER
      },
      total_expenses: {
        allowNull: false,
        type: Sequelize.REAL
      },
      average_expenses: {
        allowNull: false,
        type: Sequelize.REAL
      },
      monthly_expenses: {
        allowNull: false,
        type: Sequelize.REAL
      },
      yearly_expenses: {
        allowNull: false,
        type: Sequelize.REAL
      },
      date: {
        type: Sequelize.DATE
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('mm_analytic');
  }
};