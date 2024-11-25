import { useState } from 'react';
import styles from './form.module.css';

export default function Form({
  todos,
  setTodos,
}: {
  todos: { name: string; isCompleted: boolean }[];
  setTodos: React.Dispatch<
    React.SetStateAction<{ name: string; isCompleted: boolean }[]>
  >;
}) {
  const [todo, setTodo] = useState({ name: '', isCompleted: false });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    //is set asynchronusly
    setTodos([...todos, todo]);
    setTodo({ name: '', isCompleted: false });
  }
  return (
    <form className={styles.todoForm} onSubmit={(e) => handleSubmit(e)}>
      <div className={styles.inputContainer}>
        <input
          className={styles.todoInput}
          type='text'
          placeholder='Add a todo...'
          value={todo.name}
          onChange={(e) =>
            setTodo({ name: e.target.value, isCompleted: false })
          }
        />
        <button className={styles.submitButton} type='submit'>
          Add
        </button>
      </div>
    </form>
  );
}
