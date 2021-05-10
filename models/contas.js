'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Contas extends Model {
    
    static associate(models) {
      
    }
  };
  Contas.init({
    status: DataTypes.STRING,
    dtabertura: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Contas',
  });
  return Contas;
};