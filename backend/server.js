const path = require('path');
const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
require('dotenv').config;
const mongoose = require('mongoose');

const PORT = process.env.PORT || 8070;

app.use(cors());

//server configuration

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})



