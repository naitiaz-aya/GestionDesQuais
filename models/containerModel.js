const mongoose = require("mongoose")

const containerSchema = new mongoose.Schema({
  Ref:{
    type: String,
    required: [true, "Please fill Ref "]
  },
  Type:{
    type: String,
    required: [true, "Please fill Type "]
  },
  Weight:{
    type: Number,
    required: [true, "Please fill Weight "]
  },
  Status:{
    type: String,
    required: [true, "Please fill Status "]
  },
  Client_Id:{
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "Please fill Client"]
  },
  Sender_Id:{
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "Please fill Sender"]
  },
  Category_Id:{
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "Please fill Category"]
  },
  Zone_Id:{
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "Please fill Zone"]
  }
})

const Container = mongoose.model("container", containerSchema)
module.exports = Container