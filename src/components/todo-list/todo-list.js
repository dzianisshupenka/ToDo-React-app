import React from 'react';
import ListItem from "./todo-list-item";
import './todo-list.css'

const ToDoList = ({todos}) => {
    const items = todos.map((item) => {
        const {id, ...items} = item;
        return(<li className='list-group-item' key={id}>
                    <ListItem {...items}/>
               </li>)
    })
    return(
        <ul className='list-group todo-list'>
            {items}
        </ul>
    )
}

export default ToDoList;