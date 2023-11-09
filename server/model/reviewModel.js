const mongoose=require("mongoose")

const reviewSchema=mongoose.Schema({
    userId: {
        type: String,
        required: true,
      },
      description: {
        type: String,
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

})

const ReviewModel=mongoose.model("review",reviewSchema)

module.exports={
    ReviewModel
}