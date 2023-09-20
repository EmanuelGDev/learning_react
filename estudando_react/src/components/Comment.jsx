import styles from './Comment.module.css'

export function Comment() {
  return(
    <div className={styles.comment}>
      <img src="https://avatars.githubusercontent.com/u/116103726?v=4" alt=""/>

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <haeder></haeder>

          <p>
            
          </p>
        </div>
        <footer>
          aplaudir
        </footer>
      </div>
    </div>
  )
}