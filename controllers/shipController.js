const Ship = require("../models/shipModel")
const base = require("./baseController")


exports.createShip = base.createOne(Ship);
exports.getAllShip = async (req, res, next) => {
  try {
    const doc = await Ship.find().populate({
        path:"shipOwner",
        model:"shipOwner"
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