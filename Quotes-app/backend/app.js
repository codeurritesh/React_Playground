const express=require('express');
const app=express();
const mongoose=require('mongoose');
const cors=require('cors');

const seedQuotes=require('./seed');
const QuotesRoutes=require('./apis/QuotesRoutes');
app.get('/hello'),(req,res)=>{
    res.status(200).json({msg:'Hello from Server'});
}
app.use(cors());
app.use(express.json())

// seedQuotes();
app.use(QuotesRoutes);

mongoose.connect('mongodb://127.0.0.1:27017/Quotes-DB').then(()=>console.log('DB Connected')).catch((err)=>{
    console.log(err);
});

const port=8000;
app.listen(port,()=>{
    console.log("Server started ap port 8000");
})
