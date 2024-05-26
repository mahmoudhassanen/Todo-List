import React , {useContext, useRef} from "react";
import classes from './NewTodo.module.css'
import { TodoContext } from "../Store/Store";
const NewTodo : React.FC=() => {
const todoTextInputRef = useRef<HTMLInputElement>(null)
const todoctx =  useContext(TodoContext)
const submitHandle = (event : React.FormEvent  ) => 
    {

        event.preventDefault();
        const enteredText = todoTextInputRef.current!.value;
           
        if (enteredText.trim().length === 0) {
            return ;
            
        }
        todoctx.addTodo(enteredText)
        todoTextInputRef.current!.value = '';
    }


return (

    <form  onSubmit={submitHandle} className={classes.form}>
<label htmlFor="text"> Todo text </label>
<input type="text"  id="text" ref={todoTextInputRef} />
<button > Add Todo</button>
    </form>
)

}



export default NewTodo