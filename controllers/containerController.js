const Container = require("../models/containerModel")
const base = require("./baseController")

exports.createContainer = base.createOne(Container);
exports.getAllContainer = async (req, res, next) => {
  try {
    const doc = await Container.find().populate([
      {
        path: "truckId",
        model: "truck",
      },
      {
        path: "userId",
        model: "User",
      },
      {
        path: "categoryId",
        model: "category",
      },
      {
        path: "blockPartId",
        model: "blockPart",
      },
    ]);

    res.status(200).json({
      status: "success",
      results: doc.length,
      data: {
        doc,
      },
    });
  } catch (error) {
    next(error);
  }
};