const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect('mongodb+srv://admin:BoulesAndBites2024@cluster0.vm9qrip.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true });

// Middleware
app.use(cors());
app.use(express.json());

// Routes
// Define your API routes here

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
