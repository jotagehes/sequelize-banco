'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Clientes extends Model {
    
    static associate(models) {
      Clientes.belongsToMany(models.Agencias,{
        through: "contas"
      })
    }
  };
  Clientes.init({
    nome: DataTypes.STRING,
    cpf: DataTypes.STRING,
    sexo: DataTypes.STRING,
    salario: DataTypes.DOUBLE,
    contato: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Clientes',
  });
  return Clientes;
};