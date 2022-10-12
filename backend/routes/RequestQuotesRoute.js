const RQ = require("../models/RequestQuoteSchema");
const Router = require("express");
const RQRoute = Router();



RQRoute.post("/newrq",(req,res)=>{
    const {Product_details,Delivery,Transportation_by,Container_type,Weight,Quantity_Of_Container,From,To,Ready_To_Load,Associated_services,First_name,Last_name,Phone,Email}=req.body;
    const newrq = new RQ({Product_details,Delivery,Transportation_by,Container_type,Weight,Quantity_Of_Container,From,To,Ready_To_Load,Associated_services,First_name,Last_name,Phone,Email});
    newrq.save().then(()=>{
        res.send({message:"Request Quote created successfully"});
    }).catch((err)=>console.log(err));
})

RQRoute.get("/all", async(req,res)=>{
    const allrq = await RQ.find();
    res.status(200).send(allrq);
})


module.exports=RQRoute;