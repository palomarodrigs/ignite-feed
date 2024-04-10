import { Avatar } from './avatar'
import { Comment } from './comment'

import styles from './post.module.css'

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/palomarodrigs.png" />

          <div className={styles.authorInfo}>
            <strong>Paloma Rodrigues</strong>
            <span>Front-end Developer</span>
          </div>
        </div>

        <time title="09 de Abril ás 20:00h" dateTime="2024-04-09 00:20:00">
          Posted 1 hour ago
        </time>
      </header>

      <div className={styles.content}>
        <p>Hi guys 👋</p>

        <p>
          I just uploaded a new project on my github. It’s a project I did with ai, The
          project name is easyup 🚀
        </p>

        <p>
          👉 <a href="">palomarodrigs/easyup</a>
        </p>

        <p>
          <a href="">#newproject</a> <a href="">#ai</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Leave your feedback</strong>

        <textarea placeholder="Leave a comment" />

        <footer>
          <button type="submit">Post</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}
