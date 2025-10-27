//read files
const fs = require('fs');

// fs.readFile('./docs/blog.txt',(err,data)=>{
    // if(err){
        // console.log(err);
    // }
    // console.log(data.toString());
// });
// console.log('last last');
//writting files
// fs.writeFile('./docs/blog.txt','hello ninjas',()=>{
    // console.log('file was written');
// });

//creating directories
//if(!fs.existsSync('./assets')){
   // fs.mkdir('./assets',(err)=>{
   //     if(err){
     //       console.log(err);
    //    }
   //     console.log('folder created');
   // });
//}else{
  //  fs.rmdir('./assets',(err)=>{
    //    if(err){
      //      console.log(err);
     //   }else{
      //      console.log('file deleted');
       // }

   // });
//};
if(fs.existsSync('./docs/deleteme.txt'))
    fs.unlink('./docs/deleteme.txt',(err)=>{
        if(err){
            console.log(err);
        }
console.log('file deleted');
    });
    