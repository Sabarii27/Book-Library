import './BookCard.css'

function BookCard({ title, author, year, rating, genre, color }) {
  return (
    <article className="book-card">
      <div className="cover" style={{ backgroundColor: color }}>
        <h3>{title}</h3>
        <p>{author}</p>
      </div>
      <div className="info">
        <span className="genre-tag">{genre}</span>
        <h4>{title}</h4>
        <p className="meta">
          {author} · {year}
        </p>
        <div className="footer">
          <span className="rating">⭐ {rating}</span>
          <button className="add-btn">+ Reading list</button>
        </div>
      </div>
    </article>
  )
}

export default BookCard
