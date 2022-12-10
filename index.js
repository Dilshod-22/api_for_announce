const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const passport = require("passport")
const session = require("express-session")
const AuthRouter = require("./router/auth")


require('dotenv').config();



app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.SESSION_SECRET
}));
app.use(passport.initialize());
app.use(passport.session());




app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))



mongoose.connect(process.env.DATABASE_URL,{useNewUrlParser:true,useUnifiedTopology: true})
mongoose.connection.on("connected",()=>{console.log("Database connected !");})
mongoose.connection.on("error",(error)=>{console.log("worng connection to database " , error);})



app.use("/auth",AuthRouter)
// app.use("/homework")
// app.use("/course")



const PORT = process.env.PORT || 8000;

app.listen(PORT,()=>{
    console.log("server is running");
})