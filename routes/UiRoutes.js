const Route = require("express").Router()
const UIcontroller = require("../controller/UIcontroller")

Route.get("/",UIcontroller.Index)

module.exports=Route