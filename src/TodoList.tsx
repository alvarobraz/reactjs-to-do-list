import { Trash } from 'phosphor-react'
import style from './TodoList.module.css'
import { PropsTodoList } from './App'

export function TodoList({ handleIsConcluded, nametask, isConcluded, deleteTasks }:PropsTodoList) {
  return(
    <div className={style.contentTodoList}>
      <div className={style.leftContent}>
        <input 
          onChange={handleIsConcluded} 
          type='checkbox'
          value={nametask}
        />
        <p className={isConcluded ? style.through : ''}>{nametask}</p>
      </div>
      <div className={style.rigthContent}>
        <button onClick={()=>deleteTasks(nametask)}>
          <Trash size={16} />
        </button>
      </div>
    </div>
  )
}