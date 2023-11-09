const {ProductModel}=require("../model/productModel")

// get All product

const getProduct = async (req, res) => {
    try {
      if (req.params.id) {
        const productById = await ProductModel.findById(req.params.id);
        if(!productById) return res.status(200).json( "No Product found by ID" );
        res.status(200).json({ "Product by ID": productById });
      } else {
        const allProducts = await ProductModel.find();
        res.status(200).json({ "AllProducts": allProducts });
      }
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };


// add/create

const addProduct=async(req,res)=>{
    try{
        const payload=req.body;
        const product= new ProductModel(payload)
        await product.save()
        res.status(200).json({"Added Product":product})

    }catch(err)
    {
        res.status(501).json(err.message)
    }
}

const updateProduct = async (req, res) => {
    try {
      const id = req.params.id;
      const payload = req.body;
      
      const updatedProduct = await ProductModel.findByIdAndUpdate(id, payload, { new: true });
  
      // Check if the product was found and updated
      if (!updatedProduct) {
        return res.status(404).json({ message: 'Product not found' });
      }
  
      // Return the updated product in the response
      res.status(200).json({ "Updated product": updatedProduct });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  
//delete product

const deleteProduct=async(req,res)=>{
    try{
       const id=req.params.id
       const deletedproduct= await ProductModel.findByIdAndDelete(id)
       res.status(200).json({"Deleted Product":deletedproduct})
    }catch(err)
    {
        res.status(501).json(err.message)
    }
}


  
module.exports={
    getProduct,
    addProduct,
    updateProduct,
    deleteProduct,

}