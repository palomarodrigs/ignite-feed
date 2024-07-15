import { Header } from './components/header'
import { Sidebar } from './components/sidebar'
import { Post } from './components/post'

import styles from './App.module.css'

import './global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/palomarodrigs.png',
      name: 'Paloma Rodrigues',
      role: 'Software Developer',
    },
    content: [
      { type: 'paragraph', content: 'Hi guys 👋' },
      {
        type: 'paragraph',
        content:
          'I just uploaded a new project on my github. It’s a project I did with ai, The project name is easyup 🚀',
      },
      {
        type: 'paragraph',
        content:
          'It’s a simple web app that allows you to upload a file and get a link to share it.',
      },
      { type: 'link', content: '👉 palomarodrigs/easyup' },
    ],
    publishedAt: new Date('2024-06-25 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educator @Rocketseat',
    },
    content: [
      { type: 'paragraph', content: 'Hey devs 👋' },
      {
        type: 'paragraph',
        content:
          'I just released a new project on my github, the project name is FocusTimer 🚀',
      },
      {
        type: 'paragraph',
        content:
          'FocusTimer its a timer that uses the Pomodoro technique to increase productivity by dividing work into 25 minutes intervals with short breaks to maintain focus and efficiency.',
      },
      { type: 'link', content: '👉 palomarodrigs/focustimer' },
    ],
    publishedAt: new Date('2024-06-30 20:00:00'),
  },
]

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map((post) => (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </div>
  )
}
