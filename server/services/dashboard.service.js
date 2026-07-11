const {
  Product,
  Category,
  User
} = require("../models");

const getSummary = async () => {

  const totalProducts = await Product.count();

  const totalCategories = await Category.count();

  const totalUsers = await User.count();

  return {
    totalProducts,
    totalCategories,
    totalUsers,
    totalOrders: 0
  };

};

module.exports = {
  getSummary
};