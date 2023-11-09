const mongoose=require("mongoose")
require("dotenv").config()

const connection=mongoose.connect(`mongodb+srv://prabhat:${process.env.mongodb}@cluster0.nob5hjt.mongodb.net/product_revretryWrites=true&w=majority`)


module.exports={
    connection
}