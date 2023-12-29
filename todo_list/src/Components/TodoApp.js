import React,{useState,useEffect} from 'react'
import TodoList from './TodoList'
import Form from './Form';

const TodoApp = () => {

    const DUMMY_TODOS = JSON.parse(window.localStorage.getItem('AllTodos') || "[]") 

    const [todos, setTodos] = useState(DUMMY_TODOS);
    
    useEffect(()=>{
        console.log(todos);
        window.localStorage.setItem('AllTodos',JSON.stringify(todos));
    },[todos])

    const addTodo = (todo) => {
        setTodos([...todos, todo]);
    }
    const deletetodo=(id)=>{
        setTodos((prevtodos)=>{
            return prevtodos.filter((item)=>item.id!==id);
        })

    }
    console.log();
    const checkedChange=(id)=>{
        setTodos((prevtodos)=>{
            return prevtodos.map((item)=>{
                if(item.id==id){
                    const oldState=item.checked;
                    item.checked=!oldState;
                    return item;
                }else{
                    return item;
                }
            })
        })
    }
    // console.log(todos);
    return (
        <div style={{width:'360px',margin:'30px auto'}}>
            <h1 style={{textAlign:'center'}}>Todo App</h1>
            <Form addTodo={addTodo} todos={todos} />
            <TodoList todos={todos} deletetodo={deletetodo} checkedChange={checkedChange} />
           
        </div>
    )
}

export default TodoApp
