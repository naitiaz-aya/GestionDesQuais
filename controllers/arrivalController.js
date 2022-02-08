const Arrival = require("../models/arrivalModel")
const base = require("./baseController")


exports.createArrival = base.createOne(Arrival)
exports.getAllArrival = async (req, res, next) => {
  try {  
    const doc = await Arrival.find().populate({
        path:"Boat_Id",
        model:"boat"
    })

    res.status(200).json({
      status: "success",
      results: doc.length,
      data: {
        doc
      },
    })
  } catch (error) {
    next(error)
  }
}