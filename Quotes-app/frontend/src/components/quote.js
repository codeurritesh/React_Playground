/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
const quote = (props) => {
    const navigate=useNavigate();

    function showQuoteHandler(id){
        navigate(`/show/`+id)
    }

    async function deleteQuote(id){
      console.log('clickrkk');
      const apidata=await axios.delete('http://localhost:8000/deletequote/'+id);
      const newQuotes=apidata.data.deletedQuote;
      props.delete(newQuotes);
      navigate('/');
    }
    function deleteQuoteHandler(id){
      deleteQuote(id);
    }

  return (
    <div className="card mb-3">
  <div className="card-body">
    <h5 className="card-title">{props.author}</h5>
    <p className="card-text">
{props.quote}    </p>
<div onClick={() => deleteQuoteHandler(props.id)} className="btn btn-danger float-end m-2 ">
    Delete Quote
      </div>
    <div onClick={() => showQuoteHandler(props.id)} className="btn btn-dark float-end m-2">
      View Full Screen
    </div>
  </div>
</div>

  )
}

export default quote