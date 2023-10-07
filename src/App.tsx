import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { NewTaskSearch } from './components/NewTaskSearch';
import './global.css';
import styles from './App.module.css';
import { HeaderCounts } from './components/HeaderCounts';
import { TodoList } from './TodoList';

import clipBoard from '../src/assets/clipboard.svg'

interface PropsTasks {
  nametask: string;
  isConcluded: boolean;
}

export interface PropsTodoList extends React.HTMLProps<HTMLButtonElement> {
  nametask: string;
  isConcluded: boolean;
  handleIsConcluded: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  deleteTasks: (e: string) => void
  
}

export function App() {

  const [taskText, setTaskText] = useState<string>('');
  const [tasks, setTasks] = useState<PropsTasks[]>([]);
  const [concludeds, setConcludeds] = useState<number>(0);

  function handleTextareaChange(evt: React.ChangeEvent<HTMLTextAreaElement>) {
    setTaskText(evt.target.value);
  }

  async function handleTasks(e: React.FormEvent) {
    e.preventDefault()
    if(taskText.length === 0) {
      return
    }
    const newTask: PropsTasks = {
      nametask: taskText,
      isConcluded: false,
    };
    setTasks([...tasks, newTask]);
    setTaskText('')
  }

  function handleIsConcluded(evt: React.ChangeEvent<HTMLInputElement>) {
    
    const nameTaskSelected = evt.target.value;
    const taskClicked = tasks.filter(filter => filter.nametask === nameTaskSelected)
    if(taskClicked[0].isConcluded === false) {
      const newTask: PropsTasks = {
        nametask: taskClicked[0].nametask,
        isConcluded: true,
      };
      const taskFitered = tasks.filter(filter => filter.nametask !== nameTaskSelected)
      const updatedTasks = [...taskFitered];
      updatedTasks.push(newTask);
      updatedTasks.sort((a, b) => {
        if (a.nametask < b.nametask) {
          return -1;
        }
        if (a.nametask > b.nametask) {
          return 1;
        }
        return 0;
      });
      setTasks(updatedTasks);
    }
    else {
      const newTask: PropsTasks = {
        nametask: taskClicked[0].nametask,
        isConcluded: false,
      };
      const taskFitered = tasks.filter(filter => filter.nametask !== nameTaskSelected)
      const updatedTasks = [...taskFitered];
      updatedTasks.push(newTask);
      updatedTasks.sort((a, b) => {
        if (a.nametask < b.nametask) {
          return -1;
        }
        if (a.nametask > b.nametask) {
          return 1;
        }
        return 0;
      });
      setTasks(updatedTasks);
    }
  }

  function deleteTasks(e: string) {
   const taskToDelete = tasks.filter(filter => filter.nametask !== e)
   setTasks(taskToDelete);
  }

 

  useEffect(()=>{
    if(tasks.length !== 0) {
      const concludeds = tasks.filter(filter => filter.isConcluded === true)
      setConcludeds(concludeds.length)
    }
  },[tasks])
  
  return (
    <div>
      <Header />
      <div className={styles.main}>
        <NewTaskSearch 
        handleTextareaChange={handleTextareaChange}
        taskText={taskText}
        handleTasks={handleTasks}
        />
        <HeaderCounts
          totalTasks={tasks.length}
          totalConcludeds={concludeds}
        />
        {
          tasks.length !== 0 ?
          tasks.map((item) => (
            <TodoList 
              key={item.nametask} 
              nametask={item.nametask}
              isConcluded={item.isConcluded}
              handleIsConcluded={handleIsConcluded}
              deleteTasks={deleteTasks}
            />
          ))
          :
          <div className={styles.empty}>
            <img src={clipBoard} alt="CLipboard, uma pasta referênciado que não há nada!" />
            <p>Você ainda não tem tarefas cadastradas</p>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        }
      </div>
    </div> 
)
}