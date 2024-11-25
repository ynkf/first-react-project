import styles from './footer.module.css';

export default function Footer({
  completedCount,
  todoCount,
}: {
  completedCount: number;
  todoCount: number;
}) {
  return (
    <div className={styles.footer}>
      <span className={styles.item}>Completed Todos: {completedCount}</span>
      <span className={styles.item}>Total Todos: {todoCount}</span>
    </div>
  );
}
