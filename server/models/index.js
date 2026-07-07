const sequelize = require("../config/database");

const Role = require("./Role");
const User = require("./User");
const RegionalDistributionCenter = require("./RegionalDistributionCenter");

// Relationships
Role.hasMany(User, { foreignKey: "role_id" });
User.belongsTo(Role, { foreignKey: "role_id" });

RegionalDistributionCenter.hasMany(User, {
  foreignKey: "rdc_id",
});

User.belongsTo(RegionalDistributionCenter, {
  foreignKey: "rdc_id",
});
const Category = require("./Category");

const Product = require("./Product");
const Category = require("./Category");

Category.hasMany(Product, {
    foreignKey: "category_id"
});

Product.belongsTo(Category, {
    foreignKey: "category_id"
});

module.exports = {
    sequelize,
    Role,
    User,
    RegionalDistributionCenter,
    Category,
    Product
};