const Block = require("../models/blockModel")
const base = require("./baseController")

exports.createBlock = base.createOne(Block);
exports.getAllBlock =  async (req, res, next) => {
  try {
    const doc = await Block.find().populate({
        path:"partId",
        model:"quayPart"
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
