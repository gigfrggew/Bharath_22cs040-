const express=require('express')
const app=express()
const port=5000;
app.use('/myapi',(req,res)=>{
    res.send("hello,World!");
})
app.listen(port,()=>{
    console.log("server listening to 5000")
})