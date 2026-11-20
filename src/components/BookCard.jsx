function BookCard({ book, added, onAdd }) {
  const coverUrl = book.coverId
    ? `https://covers.openlibrary.org/b/id/${book.coverId}-M.jpg`
    : null;

  return (
    <div className="card">
      {coverUrl ? (
        <img
          className="book-cover-image"
          src={coverUrl}
          alt={`Cover of ${book.title}`}
        />
      ) : (
        <div className="book-cover-placeholder">
          <span>No cover</span>
        </div>
      )}
      <div className="card-body">
        <div className="genre-label">{book.genre}</div>
        <h4>{book.title}</h4>
        <p className="meta">
          {book.author}{book.year ? ` · ${book.year}` : ""}
        </p>
        <div className="rating">
          <button onClick={onAdd} disabled={added}>
            {added ? "✓ Added" : "+ Reading list"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookCard;
