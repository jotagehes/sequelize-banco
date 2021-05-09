'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('Agencias', [
    {
     numero: 7451,
     descricao:"Agência praça sete",
     createdAt: new Date(),
     updatedAt: new Date()
     },
    {
     numero: 7548,
     descricao:"Agência Internacional",
     createdAt: new Date(),
     updatedAt: new Date()
     },
    {
     numero: 1585,
     descricao:"Agência Wenefredo Portela",
     createdAt: new Date(),
     updatedAt: new Date()
     },
    {
     numero: 4259,
     descricao:"Agência Brasileira de Contas",
     createdAt: new Date(),
     updatedAt: new Date()
     },
    {
     numero: 9648,
     descricao:"Agência Militar",
     createdAt: new Date(),
     updatedAt: new Date()
     },
    ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('Agencias', null, {})
  }
};
