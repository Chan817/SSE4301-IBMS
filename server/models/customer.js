const mongoose = require("mongoose");

const CustomerSchema = mongoose.Schema({
    name:String,
    address: String,
    email: String,
    contact: String,
});
module.exports = mongoose.model("Customer", CustomerSchema)