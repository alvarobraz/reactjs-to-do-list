import styles from './HeaderCounts.module.css'


export function HeaderCounts() {
  return (
    <header className={styles.contentCounts}>
      <div>
        <p>Tarefas criadas <span>5</span></p>
      </div>
      <div>
        <p>Concluídas <span>2 de 5</span></p>
      </div>
    </header>
  )
}