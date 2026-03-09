const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

// Configuration
const connectDB = require("./config/db");
connectDB();

// Middleware
app.use(cors());

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/gharpayyCRM", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));

// Test route
app.get("/", (req, res) => {
  res.send("Gharpayy CRM API running");
});

// Start server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});