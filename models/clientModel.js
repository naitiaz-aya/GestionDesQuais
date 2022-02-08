const mongoose = require("mongoose")

const clientSchema = new mongoose.Schema({
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

const Client = mongoose.model("client", clientSchema)
module.exports = Client