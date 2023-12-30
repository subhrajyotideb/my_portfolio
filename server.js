const express = require("express")
const app = express()
require("dotenv").config()
const bodyparser = require("body-parser")
const path = require("path")
const ejs = require("ejs")


// bodyparser
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())

// ejs setup
app.set("view engine","ejs")
app.set("views","views")

// static public folder
app.use(express.static(path.join(__dirname,"public")))


// ui routes
const UiRoutes = require("./routes/UiRoutes")
app.use(UiRoutes)

// port
const port = process.env.PORT

// server
app.listen(port,()=>{
    console.log(`server running on port http://localhost:${port}`);
})
