import Sequelize, { Model } from 'sequelize';

export default class Photo extends Model {
  static init(sequelize) {
    super.init({
      originalname: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'This field empty',
          },
        },
      },
      filename: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'This field empty',
          },
        },
      },
    }, {
      sequelize,
      tableName: 'photos',
    });

    return this;
  }

  // assossiando tabelas, belongsTo = pertence à -> model x, foreingn = id da ref
  static associate(models) {
    // exemplo abaixo seria no Student
    // this.hasOne(models.Photo, { foreignKey: 'COLOCA REFERENCIA DA FOTO' });
    this.belongsTo(models.Student, { foreignKey: 'student_id' });
  }
}
