import { Header } from './components/Header';
import { NewTaskSearch } from './components/NewTaskSearch';
import './global.css';
import styles from './App.module.css';
import { HeaderCounts } from './components/HeaderCounts';
import { TodoList } from './TodoList';

export function App() {
  
  return (
    <div>
      <Header />
      <div className={styles.main}>
        <NewTaskSearch />
        <HeaderCounts />
        <TodoList />
        <TodoList />
        <TodoList />
        <TodoList />
        <TodoList />
      </div>
    </div> 
)
}