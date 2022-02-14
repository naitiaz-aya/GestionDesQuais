const mongoose = require("mongoose")

const reservationSchema = new mongoose.Schema({
  dateCheckIn:{
    type: Date,
    required: [true, "Please fill Date "]
  },
  numberOfContainer:{
    type: Number,
    required: [true, "Please fill NumberOfContainer "]
  },
  userId:{
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "Please fill userId"]
  },
  shipId:{
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "Please fill shipId"]
  },
  quayId:{
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "Please fill quayId"]
  }
})

const Reservation = mongoose.model("reservation", reservationSchema)
module.exports = Reservation