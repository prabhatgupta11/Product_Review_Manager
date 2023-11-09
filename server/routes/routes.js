const express=require("express")
const route=express.Router()

const productController=require("../controller/productController")


route.use("/getProduct",productController.getProduct)

module.exports={
    route
}
