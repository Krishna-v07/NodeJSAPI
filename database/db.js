const mysql=require("mysql");
var connections=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"ems_system"
})
connections.connect(function(err){
   if(err) throw err
   console.log("database connected")
})

module.exports =connections;