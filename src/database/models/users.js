'use strict';
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    user_id: DataTypes.INTEGER,
    user_email: DataTypes.STRING,
    user_name: DataTypes.STRING,
    user_last_active_at: DataTypes.DATE,
    user_is_verified: DataTypes.BOOLEAN,
    user_oauth_type: DataTypes.INTEGER
  }, {});
  Users.associate = function(models) {
    // associations can be defined here
  };
  return Users;
};