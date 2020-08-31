module.exports= blog_index = (req,res)=>{
    res.render('index.ejs');  
}
module.exports =add_blog=(req,res)=>{
    res.render('addpost');
}
module.exports = about = (req,res)=>{
    res.render('about');
}