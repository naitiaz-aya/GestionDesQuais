const mongoose = require("mongoose")

const storageAreaSchema = new mongoose.Schema({
  name:{
    type: String,
    required: [true, "Please fill name "]
  },
  blockId:{
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "Please fill blockId"]
  },
})

const StorageArea = mongoose.model("storageArea", storageAreaSchema)
module.exports = StorageArea