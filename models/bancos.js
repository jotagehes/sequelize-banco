'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bancos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Bancos.init({
    cnpj: DataTypes.INTEGER,
    razao: DataTypes.STRING,
    contato: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Bancos',
  });
  return Bancos;
};