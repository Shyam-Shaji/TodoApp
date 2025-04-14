import styles from "./todoitem.module.css";

export default function TodoItem({ item, todos, setTodos }) {
  function handleDelete() {
    // console.log("Delete button clicked");
    setTodos(todos.filter((todo) => todo !== item));
  }
  function handleCompleted(item) {
    console.log("item name clicked", item);
    setTodos(
      todos.map((todo) =>
        todo.name === name ? { ...todo, done: !todo.name } : todo
      )
    );
  }
  const completed = item.done ? styles.completed : "";
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span className={completed} onClick={() => handleCompleted(item.name)}>
          {item.name}
        </span>
        <span>
          <button
            className={styles.deleteButton}
            onClick={() => handleDelete(item)}
          >
            x
          </button>
        </span>
      </div>
      <hr className={styles.line} />
    </div>
  );
}
