const {Schema,model}=require('mongoose')

const Statemodel=new Schema({
state:String,
city:Array

    
})

const State=model('datastate',Statemodel)

module.exports=State