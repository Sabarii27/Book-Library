import './BookGrid.css'
import BookCard from './BookCard'

function BookGrid({ books }) {
  return (
    <div className="book-grid">
      {books.map((book) => (
        <BookCard
          key={book.id}
          title={book.title}
          author={book.author}
          year={book.year}
          rating={book.rating}
          genre={book.genre}
          color={book.color}
        />
      ))}
    </div>
  )
}

export default BookGrid
