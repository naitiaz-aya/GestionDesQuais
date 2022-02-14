const Reservation = require("../models/ReservationModel")
const base = require("./baseController")

exports.createReservation = base.createOne(Reservation);
exports.getAllReservation = async (req, res, next) => {
  try {
    const doc = await Reservation.find().populate({
        path:["shipId","quayId","userId","truckId"],
        model:["ship","quay","user","truck"]
    })

    res.status(200).json({
      status: "success",
      results: doc.length,
      data: {
        doc
      }
    })

  } catch (error) {
    next(error)
  }
}

