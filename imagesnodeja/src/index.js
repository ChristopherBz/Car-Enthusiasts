const express = require('express');
//const ejs=require('ejs');//same like handlebars
const path = require('path');
const multer =require('multer');
//const uuid= require('uuid/v4');
const { uuid } = require('uuidv4');


const storage = multer.diskStorage({

destination:path.join(__dirname,'public/uploads'),
 filename:(req,file,cb)=>{
     cb(null,uuid()+path.extname(file.originalname).toLocaleLowerCase());//uuid package to add unique id and give a .

 }


});

const app = express();

//settings
app.set('port',3001);
app.set('viwes',path.join(__dirname,'views'));
app.set('view engine','ejs');

//middlewares

app.use(multer({
    
   storage,
   dest:path.join(__dirname,'public/uploads'),
   fileFilter:(req,file,cb)=>{
      const filetype= /jpeg|jpg|png|gif/;
      const mimetype=filetype.test(file.mimetype);
      const extname= filetype.test(path.extname(file.originalname));// get the extension file
      if(mimetype && extname){
         return cb(null,true);

      }
      cb("type of file no addmited");


   }

}).single('image'));//just upload one image

//routes

app.get('/',(req,res)=>{

      res.render('index');


});

app.use(express.static(path.join(__dirname,'public')));

app.post('/upload',(req,res)=>{
    
    console.log(req.file);
    
    res.send('uploaded');

});

app.listen(app.get('port'),()=>{

console.log(`server on port ${app.get('port')}`);




});