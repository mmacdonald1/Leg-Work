'use strict';
module.exports = (sequelize, DataTypes) => {
  var Application = sequelize.define('Application', {
//date of last action? first action? timestamp?

    date : {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },

    companyName : {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    jobTitle: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    stage: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    nextAction: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    }

  });

  Application.associate = function (models) {
    models.Application.belongsTo(models.User, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Application;
};
