const express = require("express");
const mongoose = require("mongoose"); // Import mongoose
const dotenv=require('dotenv');
const app = express();

mongoose.set('strictQuery', false); // Set strictQuery option

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
if(process.env.NODE_EVN!='production'){
   require('dotenv').config(); 
}
const PORT = process.env.PORT || 3000;
const CONNECTION=process.env.CONNECTION;

const jsondata = {
  "name": "Caleb curry",
  "industry": "Music",
  "favoriteColors": [
    "red", "blue", "green"
  ],
  "favoriteNumbers": [
    5, 7, 9
  ],
  "favoritePeople": [{
      "name": "mom",
      "relationship": "parent"
    },
    {
      "name": "dad",
      "relationship": "parent"
    }
  ]
};

app.get('/', (req, res) => {
  res.send({ data: jsondata.favoritePeople });
});

app.post('/', (req, res) => {
  res.send('This is a post request!!');
});

const start = async () => {
  // Connect to MongoDB
  try {
    await mongoose.connect(CONNECTION);
    console.log('Connected to MongoDB');

    app.listen(PORT, () => {
      console.log('App listening on port ' + PORT);
    });
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

start(); // Call the start function to initiate server and database connection
