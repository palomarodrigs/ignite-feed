import { Trash, ThumbsUp } from 'phosphor-react'
import { Avatar } from './avatar'

import styles from './comment.module.css'

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/palomarodrigs.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Paloma Rodrigues</strong>

              <time title="09 de Abril ás 20:00h" dateTime="2024-04-09 00:20:00">
                About an hour ago
              </time>
            </div>

            <button title="Delete comment">
              <Trash size={24} />
            </button>
          </header>

          <p>Very good, congratulations! 👏👏</p>
        </div>

        <footer>
          <button>
            <ThumbsUp size={20} />
            Aplause <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
