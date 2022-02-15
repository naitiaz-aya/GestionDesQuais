const Reservation = require("../models/ReservationModel");
const base = require("./baseController");

exports.createReservation = base.createOne(Reservation);
exports.getAllReservation = async (req, res, next) => {
  try {
    const doc = await Reservation.find().populate([
      {
        path: "shipId",
        model: "ship",
      },
      {
        path: "userId",
        model: "User",
      },
      {
        path: "quayId",
        model: "quay",
        populate: [
          { path: "typeId", model: "quayType" },
          {
            path: "portId",
            model: "port",
            populate: {
              path: "systemId",
              model: "system",
            },
          },
        ],
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

exports.deleteReservation = base.deleteOne(Reservation);
