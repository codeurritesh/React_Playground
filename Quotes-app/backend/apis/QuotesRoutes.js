const mongoose=require('mongoose');
const router=require('express').Router();
const Quotes=require('../models/QuotesModel')

router.get('/',(req,res)=>{
    res.status(200).json({'hello':'Hey this is Quotes app'})
})
router.get('/allquotes',async(req,res)=>{
    try{
const allQuotes=await Quotes.find({});
res.status(200).json(allQuotes);
    }
    catch(error){
        res.status(404).json({'error':'Something Went Wrong'})
    }
})
router.post('/addnewquote',async (req,res)=>{
    const {Author,Quote}=req.body;
    console.log('reqq');
    await Quotes.create({author:Author,quote:Quote});
    res.status(200).json({'mess':'Quote Added'})
})
router.get('/show/:id',async(req,res)=>{
    const id=req.params.id;
    const quote=await Quotes.findById(id);
    console.log(quote);
    res.status(200).json(quote);
})
router.delete('/deletequote/:id',async(req,res)=>{
const id=req.params.id;
const tobedeleted= await Quotes.findOne({_id:id});
const deletequote=await Quotes.deleteOne({_id:id});
console.log(tobedeleted);
res.status(200).json({'deletedQuote':tobedeleted})
})
module.exports=router;