const express=require('express');
const State = require('../model/state');

const StateRoute=express.Router()


StateRoute.post('/',async(req,res)=>{
 try{
    let {state,city}=req.body;
    let newdata= new State({state,city})
    await newdata.save()
    res.send(newdata)
 }
 catch(e){
    res.send(e)
 }
})

StateRoute.get("/search",async(req,res)=>{

    try{
        let {state}=req.query;
        console.log(state)
        let data = await State.findOne({state:state});
        res.send(data.city)
    }
    catch(e){
        res.send(e)
    }

})


module.exports=StateRoute