import { useState } from 'react'

import styles from './comment.module.css'

import { Trash, ThumbsUp } from 'phosphor-react'
import { Avatar } from './avatar'

interface CommentProps {
  content: string
  onDeleteComment: (comment: string) => void
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0)

  function handleDeleteComment() {
    onDeleteComment(content)
  }

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1
    })
  }

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

            <button onClick={handleDeleteComment} title="Delete comment">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp size={20} />
            Aplause <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
