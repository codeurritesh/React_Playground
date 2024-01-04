import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useRef } from 'react'
import axios from 'axios'

function NewQuotes() {
  const navigate=useNavigate();
  const authorName=useRef();
  const quoteInput=useRef();

  const submitFormHandler=async(e)=>{
    e.preventDefault();
  const Author= authorName.current.value;
  const Quote=quoteInput.current.value;
  const apidata=await axios.post('http://localhost:8000/addnewquote',{Author,Quote});
 
  navigate('/')
  }

  return (

<form onSubmit={submitFormHandler} className='container border p-5 mt-5'>
  <fieldset disabled="">
    <legend>Add new Quote</legend>
    <div className="mb-3">
      <label htmlFor="disabledTextInput" className="form-label">
      Author Name      
      </label>
      <input
        type="text"
        id="disabledTextInput"
        className="form-control"
        placeholder="Author Name"
        ref={authorName}
      />
    </div>
    <div className="mb-3">
      <label htmlFor="disabledSelect" className="form-label">
Write a Quote      </label>
<input
        type="text"
        id="disabledTextInput"
        className="form-control"
        placeholder="Write Quote"
        ref={quoteInput}
      />    </div>
   
    <button type="submit" className="btn btn-dark w-100 mt-3">
      Submit
    </button>
  </fieldset>
</form>

    )
}

export default NewQuotes