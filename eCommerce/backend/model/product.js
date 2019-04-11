const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const { Schema } = mongoose;

var productSchema = new Schema({
    name: {
        type: String,
        required:true
    },
    price: {
        type: Number,
        required:true
    },
    imageUrl: {
        type: String,
        required:true
    },
    description: {
        type: String,
        required:true
    }
});

module.exports =  mongoose.model('Product', productSchema);