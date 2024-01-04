import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
const ShowQuote = () => {
    const params=useParams();
    const [quote,setQuotes]=useState({
        'author':'',
        'quote':''
    });
    async function getQuote(){
    const apidata=await axios.get('http://localhost:8000/show/'+params.id);
    console.log(params.id);
        setQuotes(apidata.data);
    }
    useEffect(()=>{
        getQuote();
    },[]);

  return (
    <div className='container mt-5'>
        <h1>Show Quote</h1>
    <div className="card">
  <div className="card-header">Quote</div>
  <div className="card-body">
    <blockquote className="blockquote mb-0">
      <p>{quote.quote}</p>
      <footer className="blockquote-footer">
        Author name : <cite title="Source Title">{quote.author}</cite>
      </footer>
    </blockquote>
  </div>
</div>
</div>

  )
}

export default ShowQuote