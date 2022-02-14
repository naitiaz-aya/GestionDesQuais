const Quay = require("../models/quayModel")
const base = require("./baseController")

exports.createQuay = base.createOne(Quay);
exports.getAllQuay =  async (req, res, next) => {
  try {
    const doc = await Quay.find().populate([{path:"typeId",
    model:"quayType",},{
        
        path:"portId",
        model:"port",
        populate:{
          path:"systemId",
          model:"system",
        }
    }])

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