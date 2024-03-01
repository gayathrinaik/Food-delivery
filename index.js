const express = require('express');//
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config');
const userRoutes = require('backend\routes\userRoutes.js');
const foodRoutes = require('backend\routes\foodRoutes.js');
const orderRoutes = require('backend\routes\orderRoutes.js');

const app = express();

// Body parser middleware
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Routes
app.use('/api/users', userRoutes);
app.use('/api/food', foodRoutes);
app.use('/api/orders', orderRoutes);

// Start server
const port = config.port || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
