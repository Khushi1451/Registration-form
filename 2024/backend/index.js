const express=require("express")
const app=express();
const cors=require("cors")
const bodyParser=require("body-parser")
app.use(bodyParser.json())
app.use(cors())
const data=[]
app.get('/showData',(req,res)=>{
    return res.json(data);
})
app.post('/data',(req,res)=>{
    const dataF=req.body   ;
    console.log("My Data is:",data);
data.push(dataF)
    return res.json({"success":true})
})
app.listen(5000,()=>{
    console.log("Running");
    
})