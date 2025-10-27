const express = require('express');
const morgan = require ('morgan');
const mongoose = require('mongoose');
const blogRoutes= require('./routes/blogRoutes');
//express 
const app = express();
// connect MongoDB
const dbURI='mongodb+srv://user2:test234@nodetuts.s7bpdet.mongodb.net/';
  mongoose.connect(dbURI).then(()=>{
    app.listen(3000)
  })
  .catch ((error)=>{
    console.log('error when connecting to the database',error);
  });
  


//register view engine
app.set('view engine','ejs');

//middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended : true}));
app.use(morgan('dev'));
//mongoose and sandbox routes
/*
app.get('/add-blog',(req,res)=>{
  const blog =new Blog({
    title:'new blog 2',
    snippet:'about my new blog',
    body:'more about my new blog'

  });
  blog.save()

  .then((result)=>{
  res.send(result)
  })
  .catch((error)=>{
    console.log(error);
  });
})
//find all blogs in database
app.get('/all-blogs',(req,res)=>{
  Blog.find()
  .then((result)=>{
    res.send(result);
  }).catch((error)=>{
    console.log(error);
  });
});
//find a single blog in database
app.get('/single-blog',(req,res)=>{
  Blog.findById('67f0494ce9a3da413adf1e96')
  .then((result)=>{
    res.send(result)
  }).catch((error)=>{
    console.log(error)
  });
})*/
//outputting documents in view

//routes
app.get('/',(req,res)=>{
    //res.send('<p> Home Page </p>');
  //  res.sendFile('./views/index.html',{root:__dirname});
  //rendering a view
  const blogs = [
    {title:'Yoshi found eggs',snippet:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    {title:'Mario is the winner',snippet:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
    {title:'Gikash kwa Bash',snippet:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
  ];
  res.render('index',{title:'Home',blogs});
  
});

app.get('/about',(req,res)=>{
    //res.send('<p> Home Page </p>');
    //res.sendFile('./views/about.html',{root:__dirname});
    res.render('about',{title:'About'});
});
app.use('/blogs',blogRoutes);
//listening for request
app.use((req,res)=>{
    res.status(404).render('404',{title:'404'});
});
