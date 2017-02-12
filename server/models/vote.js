'use strict';
module.exports = function (sequelize, DataTypes) {
  var Vote = sequelize.define('Vote', {
    numVotes: {
      allowNull: false,
      defaultValue: 1,
      type: DataTypes.INTEGER
    }
  }, {
      classMethods: {
        associate: function (models) {
          // associations can be defined here
        }
      }
    });
  return Vote;
};