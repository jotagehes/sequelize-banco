'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('Bancos', [
      {
      nome: "Harry Tiago Potter",
      cpf: "416.412.884-42",
      sexo: "Masculino",
      salario: 8100.99,
      contato: "(27) 98210-3086"
      },
      {
      nome: "Ronald Bilius Weasley",
      cpf: "438.334.647-20",
      sexo: "Masculino",
      salario: 6578.74,
      contato: "(69) 98752-8034"
      },
      {
      nome: "Hermione Jean Granger",
      cpf: "823.636.784-35",
      sexo: "Feminino",
      salario: 9500.58,
      contato: "(92) 99514-4210"
      },
      {
      nome: "Draco Lucius Malfoy",
      cpf: "645.851.651-77",
      sexo: "Masculino",
      salario: 6487.23,
      contato: "(82) 98192-2380"
      },
      {
      nome: "Albus Percival Wulfric Brian Dumbledore",
      cpf: "667.411.914-88",
      sexo: "Masculino",
      salario: 112965.28,
      contato: "(73) 99526-4200"
      },
  ], {});

  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('Clientes', null, {})
  }
};