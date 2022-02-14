const Port = require("../models/portModel")
const base = require("./baseController")

exports.createPort = base.createOne(Port);
exports.getAllPort = async (req, res, next) => {
  try {
    const doc = await Port.find().populate({
        path:"systemId",
        model:"system"
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