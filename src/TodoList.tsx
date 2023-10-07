import { Trash } from 'phosphor-react'
import style from './TodoList.module.css'

export function TodoList() {
  return(
    <div className={style.contentTodoList}>
      <div className={style.leftContent}>
        <input type='checkbox'></input>
        <p>aadadasdasd</p>
      </div>
      <div className={style.rigthContent}>
        <button>
          <Trash size={16} />
        </button>
      </div>
    </div>
  )
}