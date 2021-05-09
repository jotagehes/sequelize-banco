'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bancos extends Model {    
    static associate(models) {
      // define association here
    }
  };
  Bancos.init({
    cnpj: DataTypes.STRING,
    razao: DataTypes.STRING,
    contato: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Bancos',
  });
  return Bancos;
};