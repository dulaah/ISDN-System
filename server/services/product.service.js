const { Product, Category } = require("../models");

const getAllProducts = async () => {

    return await Product.findAll({

        include:[
            {
                model:Category,
                attributes:["category_id","category_name"]
            }
        ]

    });

};

const getProductById = async(id)=>{

    return await Product.findByPk(id,{

        include:[
            {
                model:Category,
                attributes:["category_id","category_name"]
            }
        ]

    });

};

const createProduct = async(data)=>{

    return await Product.create(data);

};

const updateProduct = async(id,data)=>{

    const product = await Product.findByPk(id);

    if(!product)
        throw new Error("Product not found");

    await product.update(data);

    return product;

};

const deleteProduct = async(id)=>{

    const product = await Product.findByPk(id);

    if(!product)
        throw new Error("Product not found");

    await product.destroy();

    return true;

};

module.exports={
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
};