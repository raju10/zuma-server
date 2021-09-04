const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  description: String,
  datas: {
    quantity: String,
    address: String,
    size: [],
  },
  orderImg: {},
  menCatagory: String,
  discountTotal: Number,
  orderTitle: String,
});
//console.log(todoSchema);

module.exports = orderSchema;
