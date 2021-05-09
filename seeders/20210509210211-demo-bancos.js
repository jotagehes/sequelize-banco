'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('Bancos', [{
      cnpj: '02.343.633/0001-28',
      razao: false,
      contato: 3
    },
   ], {});

  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('Bancos', null, {})
  }
};