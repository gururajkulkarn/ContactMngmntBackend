const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    category: String,
});

const CategoryModel = mongoose.model('Categories', categorySchema);

module.exports = CategoryModel;