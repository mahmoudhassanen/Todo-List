import React, { useState, ReactNode } from "react";
import { Todo } from "../Todo";

// Define the context object type
type TodosContextObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

// Initialize the context with default values
export const TodoContext = React.createContext<TodosContextObj>({
  items: [],
  addTodo: () => {},
  removeTodo: (id :string) => {}
});

// Define the Props type for the provider component
interface Props {
  children: ReactNode;
}

// Define the provider component
const TodoContextProvider: React.FC<Props> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    const newTodo: Todo = {
      id: new Date().toISOString(),
      text: todoText,
    };
    setTodos((prev) => prev.concat(newTodo));
  };

  const onRemove = (todoId: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== todoId));
  };

  const contextValue: TodosContextObj = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: onRemove,
  };

  return (
    <TodoContext.Provider value={contextValue}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;