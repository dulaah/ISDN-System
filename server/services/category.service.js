const { Category , Product} = require("../models");

const getAllCategories = async () => {
    return await Category.findAll();
};

const getCategoryById = async (id) => {
    return await Category.findByPk(id);
};

const createCategory = async (data) => {
    return await Category.create(data);
};

const updateCategory = async (id, data) => {

    const category = await Category.findByPk(id);

    if (!category)
        throw new Error("Category not found");

    await category.update(data);

    return category;
};



const deleteCategory = async (id) => {

    const category = await Category.findByPk(id);

    if (!category) {
        throw new Error("Category not found.");
    }

    const productCount = await Product.count({
        where: {
            category_id: id
        }
    });

    if (productCount > 0) {
        throw new Error(
            "Cannot delete this category because it contains products."
        );
    }

    await category.destroy();

    return true;
};
module.exports = {
    getAllCategories,
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory
};
