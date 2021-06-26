const express =require("express");
const Router=express.Router();
const connection=require("../database/db")


Router.get('/fileupload', function (req, res) {
    var sql = "SELECT * FROM file_upload";
    connection.query(sql, function(err, rows, fields) {
      if (err) {
        res.status(500).send({ error: 'Something failed!' })
      }
      res.json(rows)
    })
})


Router.post("/fileinsert",(req,res)=>{
    console.log(req.body);
     res.json({"message" :"success"})
})

Router.get("/user/:id",(req,res)=>{
  console.log(req.body);
  console.log(req.params);
   res.json({"message" :"success"})
})






module.exports=Router;