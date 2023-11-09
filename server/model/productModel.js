const mongoose=require("mongoose")

const productSchema=mongoose.Schema({
    name: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      cDate: {
        type: Date,
        default: Date.now,
      },
      uDate: {
        type: Date,
        default: Date.now,
      },
      reviews: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Review',
        },
      ],

})

const ProductModel=mongoose.model("product",productSchema)
module.exports={
    ProductModel
}