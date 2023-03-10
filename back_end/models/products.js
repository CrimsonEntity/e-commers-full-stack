const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    price: {
        type: String,
        require: true,
    }, 
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        require: true,
    }
});

module.exports = mongoose.model('Product', productSchema);