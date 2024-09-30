const mongoose=require('mongoose')
const {Schema}=mongoose

const restaurantSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    description:{
        type:String,
    
    },
   
    location:{
        type:String,
        required:true
    },
  rating:[{userId:String,userName:String,value:Number}],
  cuisineCategory:[{
    cuisineName:String,
    foodList:[{
        name:String,
        price:Number,
        description:String,
        image:String
    }]
  }]
   
})

module.exports= mongoose.model('restaurants',restaurantSchema)