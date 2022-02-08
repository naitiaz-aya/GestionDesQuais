const mongoose = require("mongoose")

const arrivalSchema = new mongoose.Schema({
  Date:{
    type: Date,
    required: [true, "Please fill Date "]
  },
  Boat_Id:{
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "Please fill Boat"]
  }
})

const Arrival = mongoose.model("arrival", arrivalSchema)
module.exports = Arrival