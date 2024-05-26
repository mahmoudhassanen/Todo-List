import React, { useContext } from "react";
import { Todo } from '../Todo'
import TodoItems from "./TodoItems";
import classes from './todo.module.css'
import { TodoContext } from "../Store/Store";
const Todos :  React.FC = () => 
   
   
    {
        const  todoctx =  useContext(TodoContext)
        return (
            <ul className={classes.todos}>
                {todoctx.items.map((item => 
              <TodoItems key={item.id} text={item.text}  onRemove={todoctx.removeTodo.bind(null , item.id)} />
                ))}
            </ul>
        )
    }

export default Todos    