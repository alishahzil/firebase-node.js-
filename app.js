const express= require('express');
const app = express();
const routes = require('./routes/blogroutes.js');
const firebase= require('./model/firebase');

app.listen(3000);
app.set('view engine','ejs');
app.use(routes);
app.use(express.static('public'));
app.use(express.static('otherapp'));
app.use(express.urlencoded({extended:true}));

app.use(express.json());
app.post('/blogs',(req,res)=>{
const blog1 = new firebase();

  blog1.someFunction(req.body);
  res.redirect('/all-blog');
});

app.get('/',(req,res)=>{
    res.redirect('/all-blog');
});
app.get('/add-blog',(req,res)=>{
    res.render('addpost');
});
app.get('/about',(req,res)=>{
    res.render('about');
    
});
app.get('/ali/:id',(req,res)=>{
    const blog1 = new firebase();
    const id = req.params.id;
     blog1.search(id).then(x=>{
       res.render('ali',{title:'individual',data:x});
    
      }).catch(()=>{
         console.log("errror")
      });
     
});
app.delete('/ali/:id',(req,res)=>{
    const blog1 = new firebase();
    const id = req.params.id;
    blog1.delete(id).then(()=>{
        console.log("delete");
        res.json({redirect : '/'});
    })
        
        .catch(()=>{
            console.log("not delete")});
        

});


