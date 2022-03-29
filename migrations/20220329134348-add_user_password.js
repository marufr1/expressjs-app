'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'users',
      'password',
      Sequelize.STRING
    )
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.removeColumn(
      'users',
      'password'
    )
  }
};
