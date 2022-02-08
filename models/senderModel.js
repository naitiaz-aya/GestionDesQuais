const mongoose = require("mongoose")

const senderSchema = new mongoose.Schema({
  Name:{
    type: String,
    required: [true, "Please fill Name "]
  },
  Tel:{
    type: String,
    required: [true, "Please fill Tel "]
  },
  Company_Id:{
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "Please fill Company"]
  }
})

const Sender = mongoose.model("sender", senderSchema)
module.exports = Sender