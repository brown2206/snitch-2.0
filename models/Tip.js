const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const TipSchema = new Schema({
    offense: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    suspect: {
        type: String,
        required: true
    }
});

module.exports = Tip = mongoose.model('tip', TipSchema);
