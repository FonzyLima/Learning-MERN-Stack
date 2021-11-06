const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;

// Connecting to MongoDB
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB Connected!")
})

//Using the Routes
const ordersRouter = require('./routes/orders');
app.use('/orders', ordersRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});