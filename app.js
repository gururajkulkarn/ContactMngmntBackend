const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const CategoryModel = require('./models/category');
const AddressModel = require('./models/address')
const NewcontactModel = require('./models/newcontact')
require('dotenv').config();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json()); // Parse JSON data in the request body

app.get('/', (req, res) => {
    res.send("Hello world from the server");
});

mongoose.connect(process.env.MONGO_CONNECTION,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});
db.once('open', () => {
  console.log('Connected to MongoDB');
});


app.get('/categorylist', (req,res)=>{
    CategoryModel.find({})
    .then(category => res.json(category))
    .catch(err => res.json(err))
})

app.get('/addresslist', (req,res)=>{
    AddressModel.find({})
    .then(address => res.json(address))
    .catch(err => res.json(err))
})

app.get('/newcontactlist', (req,res)=>{
    NewcontactModel.find({})
    .then(newcotact => res.json(newcotact))
    .catch(err => res.json(err))
})

app.post("/category", (req,res) => {
    CategoryModel.create(req.body)
    .then(category => res.json(category))
 .catch(err => res.json(err))
})

app.post("/address", (req,res) => {
    AddressModel.create(req.body)
    .then(address => res.json(address))
 .catch(err => res.json(err))
})

app.post("/newcontact", (req,res) => {
    NewcontactModel.create(req.body)
    .then(newcotact => res.json(newcotact))
 .catch(err => res.json(err))
})

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
