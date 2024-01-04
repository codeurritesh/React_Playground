const mongoose=require('mongoose');
const Quotes=require('./models/QuotesModel');

const DUMMY_QUOTES = [
    {
        author: 'Mahatma Gandhi',
        quote:'A man is but the product of his thoughts. What he thinks, he becomes.'
    },
    {
        author: 'Mahatma Gandhi',
        quote:'The greatness of humanity is not in being human, but in being humane.'
    },
    {
        author: 'Nelson Mandela',
        quote:"It always seems impossible until it's done."
    },
    {
        author: 'Abraham Lincoln',
        quote:"Democracy is by the people, for the people, of the people."
    },
]

async function seedQuotes(){
await Quotes.insertMany(DUMMY_QUOTES);
console.log('Data Seeded Successfully');
}
module.exports =seedQuotes;