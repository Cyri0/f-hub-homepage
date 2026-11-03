import styles from "./Taskbar.module.css"

const Taskbar = () => {
  return (
    <footer className={styles.taskbar}>
      <button className={styles.startButton}></button>
    </footer>
  )
}

export default Taskbar