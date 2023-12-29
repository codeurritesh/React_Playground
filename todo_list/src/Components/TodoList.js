import React from 'react'
import Todo from './Todo';
import './TodoList.css';

const TodoList = (props) => {

    const allTodos = props.todos.map((item) => {
        return <Todo key={item.id} 
        id={item.id} 
        checked={item.checked} 
        todo={item.todo} 
        deletetodo={props.deletetodo} 
        checkedChange={props.checkedChange}/>
    })


    return (
        <section>
            <ul className="todo-list">
               {allTodos}
            </ul>
        </section>
    )
}

export default TodoList
