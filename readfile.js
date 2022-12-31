const fs=require("fs");

fs.readFile("./try.txt","utf-8",(err,data)=>{
    if(err){
        console.log("error",err);
    }else{
        console.log(data);
    }
});




fs.readFile("./try1.txt","utf-8",(err,data)=>{
    if(err){
        console.log("error",err);
    }else{
        console.log(data);
    }
});