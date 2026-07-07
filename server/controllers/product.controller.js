const productService = require("../services/product.service");

const getAll = async(req,res)=>{

    const data = await productService.getAllProducts();

    res.json({
        success:true,
        data
    });

};

const getOne = async(req,res)=>{

    const data = await productService.getProductById(req.params.id);

    res.json({
        success:true,
        data
    });

};

const create = async(req,res)=>{

    const data = await productService.createProduct(req.body);

    res.status(201).json({
        success:true,
        message:"Product created successfully",
        data
    });

};

const update = async(req,res)=>{

    const data = await productService.updateProduct(
        req.params.id,
        req.body
    );

    res.json({
        success:true,
        message:"Product updated successfully",
        data
    });

};

const remove = async(req,res)=>{

    await productService.deleteProduct(req.params.id);

    res.json({
        success:true,
        message:"Product deleted successfully"
    });

};

module.exports={
    getAll,
    getOne,
    create,
    update,
    remove
};