'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
<<<<<<< HEAD
      // define association here
=======
      Book.belongsToMany(models.Order, {through: 'BooksOrders'});
      Book.belongsToMany(models.Genre, {through: 'BooksGenres'});
>>>>>>> develop
    }
  }
  Book.init({
    title: DataTypes.STRING,
    price: DataTypes.STRING,
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Book',
  });
  return Book;
};