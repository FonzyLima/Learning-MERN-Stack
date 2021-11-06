const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    order_num:{
        type: Number,
        required: true
    },
    date: {
        type: String,
        required: true,
        trim: true
    },
    client_name: {
        type: String,
        required: true,
        trim: true
    },
    amount: {
        type: Number,
        required: true,
    }
},{
    timestamps: true,
});

const Orders = mongoose.model('orders',orderSchema);

module.exports = Orders;