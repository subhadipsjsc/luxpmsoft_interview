require('dotenv').config();
const express = require("express");


const app = express();

require('./config/sequelize');


require('./routes/Myapp.routes')(app);

const port = process.env.PORT || 5000;  
app.listen(port, () => console.log("Server up and running on port " + port));
