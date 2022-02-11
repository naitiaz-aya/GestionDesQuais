const mongoose = require("mongoose")

const containerSchema = new mongoose.Schema({
  ref:{
    type: String,
    required: [true, "Please fill ref "]
  },
  brand:{
    type: String,
    required: [true, "Please fill brand "]
  },
  dimension:{
    type: String,
    required: [true, "Please fill dimension "]
  },
  weight:{
    type: Number,
    required: [true, "Please fill weight "]
  },
  serviceDate:{
    type: Date,
    required: [true, "Please fill serviceDate "]
  },
  Status:{
    type: String,
    required: [true, "Please fill Status "],
    enum:["valid","invalid"]
  },
  userId:{
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "Please fill userId"]
  },
  truckId:{
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "Please fill truckId"]
  },
  categoryId:{
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "Please fill categoryId"]
  },
  customFees:{
    type: Boolean,
    required: [true, "Please fill customFeesId"]
  },
  blockPartId:{
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "Please fill blockPartId"]
  }
})

const Container = mongoose.model("container", containerSchema)
module.exports = Container