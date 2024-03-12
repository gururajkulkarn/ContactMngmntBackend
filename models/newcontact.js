const mongoose = require('mongoose');

const newcontactSchema = new mongoose.Schema({
    fname: String,
    lname: String,
    dob: String,
    mobile: String,
    email: String,
    category: String,
    state: String,
    destrict: String,
    taluka: String,
    village: String,
});

const NewcontactModel = mongoose.model('newcontact', newcontactSchema);

module.exports = NewcontactModel;