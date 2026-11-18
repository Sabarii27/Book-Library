import './App.css'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import GenreFilter from './components/GenreFilter'
import BookGrid from './components/BookGrid'
import ReadingList from './components/ReadingList'

// Hardcoded data (Phase 1 – no state / API yet)
const genres = ['All', 'Fiction', 'Biography', 'Science', 'Self-help']

const books = [
  { id: 1, title: 'Wings of Fire', author: 'A.P.J. Abdul Kalam', year: 1999, rating: 4.8, genre: 'Biography', color: '#8f3d1c' },
  { id: 2, title: 'The Alchemist', author: 'Paulo Coelho', year: 1988, rating: 4.6, genre: 'Fiction', color: '#0f766e' },
  { id: 3, title: 'Atomic Habits', author: 'James Clear', year: 2018, rating: 4.7, genre: 'Self-help', color: '#1d4ed8' },
  { id: 4, title: 'A Brief History of Time', author: 'Stephen Hawking', year: 1988, rating: 4.5, genre: 'Science', color: '#4c1d95' },
  { id: 5, title: 'Ponniyin Selvan', author: 'Kalki', year: 1955, rating: 4.9, genre: 'Fiction', color: '#9f1239' },
  { id: 6, title: 'Ikigai', author: 'Héctor García', year: 2016, rating: 4.4, genre: 'Self-help', color: '#15803d' },
]

const readingList = [
  { id: 1, title: 'Atomic Habits', author: 'James Clear', status: 'Reading', color: '#1d4ed8' },
  { id: 2, title: 'Ponniyin Selvan', author: 'Kalki', status: 'Want to read', color: '#9f1239' },
  { id: 3, title: 'Wings of Fire', author: 'A.P.J. Abdul Kalam', status: 'Finished', color: '#8f3d1c' },
]

function App() {
  return (
    <>
      <Header count={readingList.length} />
      <main className="layout">
        <section className="library">
          <SearchBar />
          <GenreFilter genres={genres} active="All" />
          <BookGrid books={books} />
        </section>
        <ReadingList items={readingList} />
      </main>
    </>
  )
}

export default App
