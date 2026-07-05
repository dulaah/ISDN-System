const User = require("./User");
const Role = require("./Role");

Role.hasMany(User, {
  foreignKey: "role_id",
});

User.belongsTo(Role, {
  foreignKey: "role_id",
});

module.exports = {
  User,
  Role,
};