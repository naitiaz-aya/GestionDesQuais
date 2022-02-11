const mongoose = require("mongoose")

const quaySchema = new mongoose.Schema({
  ref:{
    type: String,
    required: [true, "Please fill name "]
  },
  status:{
    type: Boolean,
    required: [true, "Please fill status "]
  },
  typeId:{
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "Please fill typeId"]
  },
  portId:{
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "Please fill portId"]
  },
})

const Quay = mongoose.model("quay", quaySchema)
module.exports = Quay