module.exports = (sequelize, DataTypes) => {
  var Profile = sequelize.define('Profile', {
    UserId: {
             type: DataTypes.INTEGER,
             allowNull: false
         },
    name : {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1]
      }
    },
    url : {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1]
      }
    },
    url_one : {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1]
      }
    },
    url_two : {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1]
      }
    },

    achievements: {
      type: DataTypes.TEXT,
      allowNull: true,

    },
    questions: {
      type: DataTypes.TEXT,
      allowNull: true,

    },
    bio: {
      type: DataTypes.TEXT,
      allowNull: true,

    }

  });

  Profile.associate = function (models) {
    models.Profile.belongsTo(models.User, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Profile;
};
