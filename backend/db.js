const mongoose=require("mongoose");


mongoose.connect('mongodb://localhost:27017/blogApp',(err)=>{
    if(err){
        console.log('Connection has ended with error',err);
    }else{
        console.log('Connection is successfull');
    }
});
module.exports=mongoose;
