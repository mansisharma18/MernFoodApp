const path =require('path')
const express=require('express')
const app= express()
const PORT = 4444
const cors=require('cors')
const mongoose=require('mongoose')
const bodyParser= require('body-parser')

app.use(cors({
    origin:"http://localhost:3000"
}))


// while sending post request it gives undefined so we need bodyparser to read json.
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))


app.use('/admin',require('./routes/admin'))
// app.use('/',require('./routes/user'))


//connect with the database
mongoose
  .connect("mongodb://127.0.0.1:27017/foodApp")
  .then(() => {
    app.listen(PORT, () => {
      console.log(`http://localhost:` + PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
