var express = require('express')
var mongoose = require('mongoose')
var app = express()
var usersRouter = require('./src/routes/users')
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const MongooseURL = "mongodb://localhost:27017/profiles"

mongoose.connect(MongooseURL, {useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology:true}, function(err){
    if (err){
        console.error(err)

    }
    else {
        console.log("Connected successfully to the Database ...")
    }
})
app.use('/users',usersRouter)


const PORT = process.env.PORT || 8000
app.listen(PORT, (err)=> err ? console.error(err) : console.log(`Your server is runnning ${PORT}`))