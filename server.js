const http = require('http');
const fs = require('fs');
//creating an instance of the server
const server = http.createServer((req,res)=>{
    console.log(req.url,req.method);

    //response object
res.setHeader('content-type','text/html');
var path = './views/';
switch(req.url){
    case'/':
    path+='index.html';
    res.statusCode=200;
    break;
    case'/about':
    path+='about.html';
    res.statusCode=200;
    break;
    case'/about-us':
    res.statusCode=301;
    res.setHeader('location','/about');
    res.end();
    break;
    default:
    path+='404error.html';
    res.statusCode=404;
    break;
}

fs.readFile(path,(err, data)=>{
    if(err){
        console.log(err);
        res.end();
    }else{
        res.write(data);
        res.end();
    }
});
});
server.listen(3000,'localhost',()=>{
    console.log('listening request on port 3000');
});