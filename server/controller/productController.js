const {ProductModel}=require("../model/productModel")

// get All product

const getProduct=async(req,res)=>{
    try{
        const allproduct= await ProductModel.find()
        res.status(200).json({"AllProdcut":allproduct})

    }catch(err)
    {
        res.status(501).json(err.message)
    }
}

module.exports={
    getProduct
}