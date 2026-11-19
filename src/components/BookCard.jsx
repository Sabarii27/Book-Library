function BookCard({ book, added, onAdd }) {
  const coverColors = {
    "Self-help": "#2452d8",
    Fiction: "#137c76",
    Biography: "#c54212",
    "Sci-Fi": "#51219a",
    History: "#a8143d",
  };

  return (
    <div className="card">
      <div className="book-cover" style={{ background: coverColors[book.genre] || "#2452d8" }}>
        <h3>{book.title}</h3>
        <p>{book.author}</p>
      </div>
      <div className="card-body">
        <div className="genre-label">{book.genre}</div>
        <h4>{book.title}</h4>
        <p className="meta">{book.author} · {book.rating}</p>
        <div className="rating">
          <span><span className="star">★</span> {book.rating}</span>
          <button onClick={onAdd} disabled={added}>
            {added ? "✓ Added" : "+ Reading list"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookCard;
