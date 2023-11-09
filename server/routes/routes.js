const express=require("express")
const route=express.Router()

const productController=require("../controller/productController")


// GET /api/products/:id
route.get('/getProduct/:id', productController.getProduct);

// GET /api/products
route.get('/getProduct', productController.getProduct);

route.post("/addProduct",productController.addProduct)

//update product
route.put("/updateproduct/:id",productController.updateProduct)

module.exports={
    route
}
