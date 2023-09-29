import { ThumbsUp, Trash } from '@phosphor-icons/react'
import styles from './Comment.module.css'

export function Comment() {
  return(
    <div className={styles.comment}>
      <img src="https://avatars.githubusercontent.com/u/116103726?v=4" alt=""/>

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <haeder>
            <div className={styles.authorAndTime}>
              <strong>Emanuel Guimarães Santana</strong>
              <time title="11 de maio às 08:13"dateTime="2023-09-19 14:05:49"> Cerca de 1h atras</time>
            </div>

            <button title="Deletar comentário">
              <Trash size={20}/>
            </button>
          </haeder>

          <p>
          Muito bom Devon, parabéns!! 👏👏
          </p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}