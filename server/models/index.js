const sequelize = require("../config/database");

const Role = require("./Role");
const User = require("./User");
const RegionalDistributionCenter = require("./RegionalDistributionCenter");
const Category = require("./Category");
const Product = require("./Product");

// =========================
// Role ↔ User
// =========================

Role.hasMany(User, {
  foreignKey: "role_id",
});

User.belongsTo(Role, {
  foreignKey: "role_id",
});

// =========================
// RDC ↔ User
// =========================

RegionalDistributionCenter.hasMany(User, {
  foreignKey: "rdc_id",
});

User.belongsTo(RegionalDistributionCenter, {
  foreignKey: "rdc_id",
});

// =========================
// Category ↔ Product
// =========================

Category.hasMany(Product, {
  foreignKey: "category_id",
  as: "products",
});

Product.belongsTo(Category, {
  foreignKey: "category_id",
  as: "category",
});

module.exports = {
  sequelize,
  Role,
  User,
  RegionalDistributionCenter,
  Category,
  Product,
};