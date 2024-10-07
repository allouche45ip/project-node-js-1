const mongoose =require("mongoose")
const Schema= mongoose.Schema
 const articlleschema=  new Schema({
    title:String,
    body:String,
    nb:Number
 })                      /// object 
const article = mongoose.model("Article",articlleschema) //name table , schema

module.exports=article