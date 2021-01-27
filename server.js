// import environment variables
require("dotenv").config();

const port = process.env.PORT;

// initialise mongo database connection
const connectDB = require("./database/db");

connectDB();

// initialise express app
const express = require("express");

const app = express();

app.use(express.json());

app.listen(port, console.log(`express app running on port:${port}`));
