var bcrypt = require("bcrypt-nodejs");
module.exports = function(sequelize, DataTypes) {
  //this is where the table gets defined, exported to index.js
  var User = sequelize.define("User", {

    username: {
          type: DataTypes.STRING,
          allowNull: false
      },

      email: {
               type: DataTypes.STRING,
               allowNull: false,
               unique: {
                   msg: 'Email in the System!'
               },

               //checks for email format (foo@bar.com) via validators.js & sequelize
               validate: {
                   isEmail: {
                       msg: 'The email has wrong format!'
                   }

               }
             },

    password: {
      type: DataTypes.STRING,
      allowNull: false
    }

  });

          User.associate = function(models) {
            User.hasMany(models.Application, {
                  onDelete: "cascade"
              });
          };

          User.associate = function(models) {
            User.hasMany(models.Company, {
                  onDelete: "cascade"
              });
          };

          // User.associate = function(models) {
          //     User.hasMany(models.Contacts, {
          //         onDelete: "cascade"
          //     });
          // };

          // User.associate = function(models) {
          //     User.hasOne(models.Profile, {
          //         onDelete: "cascade"
          //     });
          // };



  User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };
  User.hook("beforeCreate", function(user) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  });


  return User;
};
