const Driver = require("../models/driverModel")
const base = require("./baseController")

exports.createDriver = base.createOne(Driver);
exports.getAllDriver = async (req, res, next) => {
  try {
    const doc = await Driver.find().populate({
        path:"truckId",
        model:"truck"
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