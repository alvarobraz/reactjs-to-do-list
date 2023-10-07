import { PlusCircle } from 'phosphor-react'

import styles from './NewTaskSearch.module.css';

export function NewTaskSearch() {
  return (
    <form className={styles.contentForm}>
      <textarea
        placeholder="Adicione um tarefa"
      />
      <button type="submit">Criar<PlusCircle size={16}/></button>
    </form>
  );
}