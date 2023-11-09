const express=require("express")
const route=express.Router()

const productController=require("../controller/productController")
const reviewController=require("../controller/reviewController")


// GET /api/products/:id
route.get('/getProduct/:id', productController.getProduct);

// GET /api/products
route.get('/getProduct', productController.getProduct);

route.post("/addProduct",productController.addProduct)

//update product
route.put("/updateproduct/:id",productController.updateProduct)

//delete product
route.delete("/deleteproduct/:id",productController.deleteProduct)


//routes for review
route.post("/addreview",reviewController.addreview)
//routes for review
route.delete("/deletereview",reviewController.deletereview)

// GET /api/products
route.get('/getreview', reviewController.getreview);

module.exports={
    route
}
