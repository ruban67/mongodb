const fs = require("fs");

const quate3="good night";
fs.appendfile(`./test.html`,"\n" + quate3, (err) =>{
    console.log("completed updating!!!");
});