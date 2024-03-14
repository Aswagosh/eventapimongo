const mongoose=require("mongoose")
const eventSchema=mongoose.Schema({

    eventName:String,
    eventBookingId:String,
    eventDate:String

})
var eventModel=mongoose.model("event",eventSchema)
module.exports=eventModel