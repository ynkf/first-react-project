import styles from './todoitem.module.css';

export default function TodoItem({
  item,
  todos,
  setTodos,
}: {
  item: { name: string; isCompleted: boolean };
  todos: { name: string; isCompleted: boolean }[];
  setTodos: React.Dispatch<
    React.SetStateAction<{ name: string; isCompleted: boolean }[]>
  >;
}) {
  function handleDelete(itemName: string) {
    let filteredTodos = todos.filter((todo) => todo.name !== itemName);

    setTodos(filteredTodos);
  }

  function handleClick(itemName: string) {
    const updatedTodos = todos.map((todo) =>
      todo.name === itemName
        ? { ...todo, isCompleted: !todo.isCompleted }
        : todo
    );

    setTodos(updatedTodos);
  }

  const completedClass = item.isCompleted ? styles.completed : '';
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span className={completedClass} onClick={() => handleClick(item.name)}>
          {item.name}
        </span>

        <span>
          <button
            className={styles.deleteButton}
            onClick={() => handleDelete(item.name)}
          >
            x
          </button>
        </span>
      </div>

      <hr className={styles.line} />
    </div>
  );
}
