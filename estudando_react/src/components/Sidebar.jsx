import {PencilLine} from "@phosphor-icons/react"

import styles from './Sidebar.module.css';
 
 export function Sidebar(){
  return (
    <aside className={styles.sidebar}>
      <img 
        className={styles.cover} 
        src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50" 
      />
      
      <div className={styles.profile}>
        <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/116103726?v=4"/>

        <strong> Emanuel Guimarães </strong>
        <span> Web Developer </span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20}/>
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
 }