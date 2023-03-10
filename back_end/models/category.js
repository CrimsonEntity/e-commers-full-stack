const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    hjame: {
        type: String,
        require: true,
    }
});

module.exports = mongoose.model('Categpry', categorySchema);