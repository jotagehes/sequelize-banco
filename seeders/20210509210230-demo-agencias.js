'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('Bancos', [
    {
     numero: 0001,
     descricao:"Agência praça sete"
     },
    {
     numero: 7548,
     descricao:"Agência Internacional"
     },
    {
     numero: 1585,
     descricao:"Agência Wenefredo Portela"
     },
    {
     numero: 4259,
     descricao:"Agência Brasileira de Contas"
     },
    {
     numero: 9648,
     descricao:"Agência Militar"
     },
    ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('Agencias', null, {})
  }
};
