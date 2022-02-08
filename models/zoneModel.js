const mongoose = require("mongoose")

const zoneSchema = new mongoose.Schema({
  Ref:{
    type: String,
    required: [true, "Please fill Ref "]
  },
  Area:{
    type: String,
    required: [true, "Please fill Area "]
  },
})

const Zone = mongoose.model("zone", zoneSchema)
module.exports = Zone