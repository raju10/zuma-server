const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
  // title: {
  //   type: String,
  // },
  catagory: {
    type: String,
  },
  imgUrl: {},
  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "active",
  },
  date: {
    type: Date,
    default: Date.now,
  },
  data: {
    menCatagory: {
      type: String,
      require: true,
    },
    title: String,
    price: Number,
    discount: {
      type: Number,
    },
    description: {
      type: String,
    },
  },
});
//console.log(todoSchema);

module.exports = todoSchema;
