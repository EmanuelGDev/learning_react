import { Header } from "./components/header";
import { Post } from "./post";

import styles from './App.module.css'

import './global.css';
import { Sidebar } from "./components/sidebar";

export function App() {

  return ( 
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
          author ="Emanuel Guimarães" 
          content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia obcaecati, dolorum eos deleniti vel minima omnis, voluptas corporis similique excepturi numquam aliquam quasi tempore unde fugiat alias, officia tenetur. Eius."
        />
        <Post 
          author ="Sandra Rodrigues" 
          content="Escrever qualquer coisa aqui"
        />
        </main>
      </div>
    </div>
  )
}

