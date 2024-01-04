import React,{useState,useEffect} from 'react'
import Quote from '../quote'
import axios from 'axios'
function AllQuotes() {

// const QUOTES = [
//   {
//       author: 'Mahatma Gandhi',
//       text:'A man is but the product of his thoughts. What he thinks, he becomes.'
//   },
//   {
//       author: 'Mahatma Gandhi',
//       text:'The greatness of humanity is not in being human, but in being humane.'
//   },
//   {
//       author: 'Nelson Mandela',
//       text:"It always seems impossible until it's done."
//   },
//   {
//       author: 'Abraham Lincoln',
//       text:"Democracy is by the people, for the people, of the people."
//   },
// ]
const [QUOTES,setQuotes]=useState([]);

async function getAllQuotes(){
const apidataa=await axios.get('http://localhost:8000/allquotes');
// console.log(apidataa);
setQuotes(apidataa.data)
}

function deleteQuote(newQuotes){
  console.log(newQuotes);
  setQuotes((preQuotes)=>{
    console.log(preQuotes);
    return preQuotes.filter((item)=>item._id!==newQuotes._id);
})
}

useEffect(()=>{
  getAllQuotes();
},[])

  return (
    <div className='container mt-3'><h1>All Quotes</h1>
    {
    QUOTES.map((item)=>{
      // console.log(item);
      return <Quote author={item.author} quote={item.quote} id={item._id} delete={deleteQuote}></Quote>
    })}
    </div>
  )
}

export default AllQuotes