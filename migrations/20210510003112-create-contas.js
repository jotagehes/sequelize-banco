'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Contas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      status: {
        allowNull: false,
        type: Sequelize.STRING        
      },
      agenciaId:{
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Agencias", key: "id", as: "agenciaId" }
      },
      clienteId:{
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Clientes", key: "id", as: "clienteId"}
      },
      dtabertura: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('Contas');
  }
};