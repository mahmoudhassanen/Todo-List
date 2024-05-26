import { Todo } from './Todo';

export const createTodo = (text: string): Todo => {
  return {
    id: new Date().toISOString(),
    text
  };
};