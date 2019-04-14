const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const { Schema } = mongoose;

var shoppingCartSchema = new Schema({
    userId: {
        type: String,
        required: true
    },
    productId: {
        type: String,
        required:true
    },
    productCount: {
        type: Number,
        default: 1
    }
});

module.exports =  mongoose.model('ShoppingCart', shoppingCartSchema);