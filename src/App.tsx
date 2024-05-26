import React, { useContext, useState } from 'react';
import './App.css';
import { Todo } from './Todo'
import Todos from './Component/Todos';
import {createTodo} from './CreateTodoId'
import NewTodo from './Component/NewTodo';

function App() {

  return (
  <>
  <NewTodo  />
  <Todos />
  </>
  );
}

export default App;
