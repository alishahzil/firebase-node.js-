const express = require('express');
var router = express.Router();
const firebase= require('../model/firebase');


router.get('/all-blog',(req,res)=>{
    const blog2 = new firebase();
   
    blog2.getdata().then(x=>{
      res.render('index',{title:'blogs',data:x});
    });

});

module.exports= router;