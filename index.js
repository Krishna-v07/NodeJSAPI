const express = require('express')
const app = express(); 
const port =process.env.PORT || 8090;
const bodyParser = require('body-parser');
app.use(bodyParser.json());



 


const Fileuploads=require("./router/fileuplad");
app.use("/",Fileuploads)


 
app.listen(port,()=>{
    console.log("server is successfully connection",port)
})