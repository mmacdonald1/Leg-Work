'use strict';
module.exports = (sequelize, DataTypes) => {
  var Contacts = sequelize.define('Contacts', {
//date of last action? first action? timestamp?
UserId: {
         type: DataTypes.INTEGER,
         allowNull: false
     },
    companyName : {
      type: DataTypes.STRING,
      allowNull: true,

    },

    Name : {
      type: DataTypes.STRING,
      allowNull: true,

    },
    jobTitle: {
      type: DataTypes.STRING,
      allowNull: true,

    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
      validate: {
        isEmail: true
      }

    },
    phone: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
  notes: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    },


  });

  Contacts.associate = function (models) {
    models.Contacts.belongsTo(models.User, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Contacts;
};
