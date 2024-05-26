import React, { useContext } from "react";
import classes from './todoItem.module.css'
import { TodoContext } from "../Store/Store";
const TodoItems : React.FC<{text : string ; onRemove : () => void  }>  = (props) => {
    const todoctx = useContext(TodoContext)
return (
<li className={classes.item} onClick={props.onRemove}>
{props.text}
</li>
)
}
export default TodoItems ; 