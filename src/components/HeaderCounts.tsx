import styles from './HeaderCounts.module.css'

type PropsCounts = {
  totalTasks: number;
  totalConcludeds: number;
}

export function HeaderCounts({ totalTasks, totalConcludeds }: PropsCounts) {
  return (
    <header className={styles.contentCounts}>
      <div>
        <p>Tarefas criadas <span>{totalTasks}</span></p>
      </div>
      <div>
        <p>Concluídas <span>{totalConcludeds} de {totalTasks}</span></p>
      </div>
    </header>
  )
}