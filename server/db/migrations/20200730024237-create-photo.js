'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('photo', {
      idx: {
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true
      },
      filename : {
        type:DataTypes.STRING
      },
      ori_filename : {
        type:DataTypes.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('photo');
  }
};