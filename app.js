const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const eventModel=require("./models/events")

const app=express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
mongoose.connect("mongodb+srv://aswagosh73:Aswa123@cluster0.xinjjtv.mongodb.net/eventsDb?retryWrites=true&w=majority&appName=Cluster0")

app.get("/",(req,res)=>{
    res.send("Hello guys...")
})

app.post("/regitered",async(req,res)=>{
    let data=req.body
    console.log(data)
    let event=new eventModel(data)
    let result=await event.save()
    res.json({"status":"success"})
})

app.listen(8088,()=>{
    console.log("server is running")
})

