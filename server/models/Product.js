const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Product = sequelize.define(
  "Product",
  {
    product_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    product_name: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },

    product_code: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    },

    brand: {
      type: DataTypes.STRING(100),
    },

    unit_price: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
    },

    unit: {
      type: DataTypes.STRING(20),
    },

    description: {
      type: DataTypes.TEXT,
    },

    image_url: {
      type: DataTypes.STRING,
    },

    status: {
      type: DataTypes.ENUM("Active","Inactive"),
      defaultValue:"Active"
    }

  },
  {
    tableName:"products",
    createdAt:"created_at",
    updatedAt:"updated_at"
  }
);

module.exports = Product;