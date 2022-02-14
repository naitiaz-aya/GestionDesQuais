const StorageArea = require("../models/StorageAreaModel")
const base = require("./baseController")

exports.createStorageArea = base.createOne(StorageArea);
exports.getAllStorageArea = async (req, res, next) => {
  try {
    const doc = await StorageArea.find().populate({
        path:"blockId",
        model:"block",
        populate:{
          path:"partId",
          model:"blockPart",
        }
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