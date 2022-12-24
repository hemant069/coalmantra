// Node: Create an express server. Create a route where if you send the name of a state then in response you will get an array of cities belonging to that state. For this you can create some sample data in mongodb and use mongoose. Just create 2 or 3 states and a few cities corresponding to these states in the database.
// For example: if you send request for Maharashtra then in response you should get Mumbai, Pune. Similarly if you send Rajasthan then in response you get Udaipur, Jaipur.
const express = require("express");
const app = express();
const mongoose=require('mongoose');
const StateRoute = require("./Route/StateRoute");
require('dotenv').config()


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/',StateRoute)

const PORT=process.env.PORT||8080
mongoose.connect(process.env.MONGO).then(()=>{
 app.listen(PORT,()=>{console.log('server started on port 8080')})
})
