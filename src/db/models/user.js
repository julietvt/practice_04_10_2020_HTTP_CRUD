'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: {
      type: DataTypes.STRING(128),
      allowNull: false,
      //validate:{ is: /^[a-z]+$/i}
    },
    lastName: {
      type: DataTypes.STRING(128),
      allowNull: false,
      //validate:{ is: /^[a-z]+$/i}
    },
    email: {
      type: DataTypes.STRING(128),
      unique: true,
      allowNull: false,
      validate: { isEmail: true },
    },
  });

  return User;
};
