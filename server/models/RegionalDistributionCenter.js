const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const RegionalDistributionCenter = sequelize.define(
  "RegionalDistributionCenter",
  {
    rdc_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    rdc_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    province: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: DataTypes.STRING,
    contact_number: DataTypes.STRING,
    email: DataTypes.STRING,
    manager_name: DataTypes.STRING,
    status: {
      type: DataTypes.ENUM("Active", "Inactive"),
      defaultValue: "Active",
    },
  },
  {
    tableName: "regional_distribution_centers",
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

module.exports = RegionalDistributionCenter;