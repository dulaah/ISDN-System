const categoryService = require("../services/category.service");

const getAll = async (req, res) => {

    const data = await categoryService.getAllCategories();

    res.json({
        success: true,
        data
    });

};

const getOne = async (req, res) => {

    const data = await categoryService.getCategoryById(req.params.id);

    res.json({
        success: true,
        data
    });

};

const create = async (req, res) => {

    const data = await categoryService.createCategory(req.body);

    res.status(201).json({
        success: true,
        message: "Category created successfully",
        data
    });

};

const update = async (req, res) => {

    const data = await categoryService.updateCategory(
        req.params.id,
        req.body
    );

    res.json({
        success: true,
        message: "Category updated successfully",
        data
    });

};

const remove = async (req, res) => {

    try {

        await categoryService.deleteCategory(req.params.id);

        res.json({
            success: true,
            message: "Category deleted successfully."
        });

    } catch (error) {

        res.status(400).json({
            success: false,
            message: error.message
        });

    }

};
module.exports = {
    getAll,
    getOne,
    create,
    update,
    remove
};