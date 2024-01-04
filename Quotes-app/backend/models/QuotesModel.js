const mongoose=require('mongoose');
const QuotesSchema=mongoose.Schema({
    
        author:{
            type:String
        },
        quote:{
            type:String
        }
    
})
module.exports = mongoose.model('Quotes',QuotesSchema);