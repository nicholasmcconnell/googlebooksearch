const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
require('dotenv').config();
const cors = require('cors');

const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
// "mongodb://localhost/googlebooks" || 
mongoose.connect(
  (process.env.MONGODB_CONNECTION_STRING), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
  }, (err) => {
      if(err){
          console.log(err);
          throw err;
      } else{ 
      (console.log("Connection to database established"));
      }
  })

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
