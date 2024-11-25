import { useState } from 'react';
import Form from './Form';
import TodoList from './TodoList';
import Footer from './Footer';

export default function Todo() {
  const [todos, setTodos] = useState<{ name: string; isCompleted: boolean }[]>(
    []
  );
  const completedCount = todos.filter((todo) => todo.isCompleted).length;
  const todoCount = todos.length;
  return (
    <div>
      <Form todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
      <Footer completedCount={completedCount} todoCount={todoCount} />
    </div>
  );
}
