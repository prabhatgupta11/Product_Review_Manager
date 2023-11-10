const {ReviewModel}=require("../model/reviewModel")
const {ProductModel}=require("../model/productModel")
const addreview=async(req,res)=>{
    try{
         const productID=req.params.productID;
        const payload=req.body;
        const newreview= new ReviewModel(payload)
        const savedreview= await newreview.save();

   // Associate the review with the corresponding product
     const product=await ProductModel.findById(productID)
     product.reviews.push(savedreview._id)
     await product.save();
        res.status(200).json({"Added review":review})
    }catch(err)
    {
        res.status(501).json(err.message)
    }
}


//delete review

const deletereview=async(req,res)=>{
    try{
       const id=req.params.id
       const deletedreview= await ReviewModel.findByIdAndDelete(id)
       res.status(200).json({"Deleted review":deletedreview})
    }catch(err)
    {
        res.status(501).json(err.message)
    }
}

// get review

const getreview=async(req,res)=>{
    try{
      const allreview=await ReviewModel.find()
      res.status(200).json(allreview)
    }catch(err)
    {
        res.status(501).json(err.message)
    }
}

module.exports={
    addreview,
    deletereview,
    getreview
}