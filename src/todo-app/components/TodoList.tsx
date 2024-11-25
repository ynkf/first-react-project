import TodoItem from './TodoItem';
import styles from './todolist.module.css';

export default function TodoList({
  todos,
  setTodos,
}: {
  todos: { name: string; isCompleted: boolean }[];
  setTodos: React.Dispatch<
    React.SetStateAction<{ name: string; isCompleted: boolean }[]>
  >;
}) {
  const sortedTodos = todos
    .slice()
    .sort((a, b) => Number(a.isCompleted) - Number(b.isCompleted));

  return (
    <div className={styles.list}>
      {sortedTodos.map((item) => (
        <TodoItem
          key={item.name}
          item={item}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
}
