const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const orderSchema = require("../schemas/orderSchema");

const Order = new mongoose.model("Order", orderSchema);
// Get all tha todos

router.get("/", async (req, res) => {
  await Order.find({}, (err, data) => {
    if (err) {
      res.status(500).json({
        error: err,
        status: false,
      });
    } else {
      res.status(200).json({
        rasult: data,
        message: "Todo was inserted succesfully",
      });
    }
  });
});

// Get a todo by Id

router.get("/:id", async (req, res) => {});
// post a todo

router.post("/", (req, res) => {
  const newOrder = new Order(req.body);
  newOrder.save((err) => {
    if (err) {
      res.status(500).json({
        error: err,
        status: false,
      });
    } else {
      res.status(200).json({
        message: "Todo was inserted succesfully",
      });
    }
  });
});
// post multiple todo

router.post("/all", async (req, res) => {
  await Order.insertMany(req.body, (err) => {
    if (err) {
      res.status(500).json({
        error: err,
        status: false,
      });
    } else {
      res.status(200).json({
        message: "Todo was inserted succesfully",
      });
    }
  });
});

// put todo update

router.put("/:id", async (req, res) => {
  const rasult = await Order.findByIdAndUpdate(
    { _id: req.params.id },
    {
      $set: {
        title: "yooo",
        description: "i love niha aa a",
      },
    },
    {
      new: true,
      useFindAndModify: false,
    },
    (err) => {
      if (err) {
        res.status(500).json({
          error: err,
          status: false,
        });
      } else {
        res.status(200).json({
          message: "Todo was inserted succesfully",
        });
      }
    }
  );
  console.log(rasult);
});

// delete todo

router.delete("/:id", async (req, res) => {
  await Order.deleteOne({ _id: req.params.id }, (err) => {
    if (err) {
      res.status(500).json({
        error: err,
        status: false,
      });
    } else {
      res.status(200).json({
        message: "Todo was inserted succesfully",
      });
    }
  });
});

module.exports = router;
