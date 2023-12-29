import React from 'react'
import './Todo.css';
import {IoTrash} from 'react-icons/io5'
const Todo = (props) => {
    function deleteTodoHandler(id){
        console.log(id)
        props.deletetodo(id);
    }
    function checkedChangeHandler(id){
        props.checkedChange(id);
    }
    
    return (
        <li className="todo">
            <input onChange={()=>checkedChangeHandler(props.id)} type='checkbox' defaultChecked={props.checked}></input>
            <p>{ props.todo } </p>
            <IoTrash onClick={()=>{
                return deleteTodoHandler(props.id);
            }} /> 
        </li>
    )
}

export default Todo
