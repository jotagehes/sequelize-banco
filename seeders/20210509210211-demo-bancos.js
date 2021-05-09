'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('Bancos', [
    {
      cnpj: '02.343.633/0001-28',
      razao: "Branco Brasileiro dos Bruxos",
      contato: "31-3236-8565",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      cnpj: '81.079.843/0001-27',
      razao: "Branco Americano dos Bruxos",
      contato: "+1-908-754-8596",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      cnpj: '44.781.567/0001-18',
      razao: "Branco Maxicano dos Bruxos",
      contato: "+52-7548-8548",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      cnpj: '54.604.065/0001-75',
      razao: "Branco Paraguaio dos Bruxos",
      contato: "+595-7485-1024",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      cnpj: '01.292.556/0001-61',
      razao: "Branco Português dos Bruxos",
      contato: "+351-748-95874",
      createdAt: new Date(),
      updatedAt: new Date()
    },
   ], {});

  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('Bancos', null, {})
  }
};