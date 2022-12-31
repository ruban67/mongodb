const fs =require("fs");
// const caption="always i will keep my self busy but i pause and think about you";
// fs.writeFile("./postcaption.html",caption,(err)=>{
//     console.log("completed writing!!!");
// });/



// const caption2="ur mine";
// for(let i=1;i<=10;i++)  
// {
//        fs.writeFile(`./backup/postcaption.html${i}.html`,caption2,(err)=>{
//         console.log("completed writing!!!");
//           });
// };


const[, , nooffiles]=process.argv;
const caption2="ur mine";
for(let i=1;i<=nooffiles;i++)  
{
       fs.writeFile(`./backup/postcaption.html${i}.html`,caption2,(err)=>{
        console.log("completed writing!!!");
          });
};