'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Professores extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Professores.belongsTo(models.usuarios);
      Professores.hasMany(models.iniciarTurma);
      Professores.hasMany(models.realizarChamada);
    }
  }
  Professores.init({
    idProfessor: DataTypes.INTEGER,
    matricula: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Professores',
  });
  return Professores;
};