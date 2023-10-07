import styles from './Header.module.css';

import logoTodo from '../assets/logo_todo.svg';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logoTodo} alt="Logotipo To Do List, um foguetinho!" />
    </header>
  );
}