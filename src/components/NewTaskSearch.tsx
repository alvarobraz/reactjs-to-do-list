import { PlusCircle } from 'phosphor-react'

import styles from './NewTaskSearch.module.css';

type PropsNewTaskSearch = {
  handleTextareaChange: (evt: React.ChangeEvent<HTMLTextAreaElement>) => void;
  taskText: string;
  handleTasks: (e: React.FormEvent) => void;
}

export function NewTaskSearch({ handleTextareaChange, taskText, handleTasks }: PropsNewTaskSearch) {
  return (
    <form className={styles.contentForm}>
      <textarea
        placeholder="Adicione um tarefa"
        onChange={handleTextareaChange}
        value={taskText}
      />
      <button type='submit' onClick={handleTasks}>Criar<PlusCircle size={16} /></button>
    </form>
  );
}