const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
    state: String,
    destrict: String,
    taluka: String,
    village: String
});

const AddressModel = mongoose.model('address', addressSchema);

module.exports = AddressModel;