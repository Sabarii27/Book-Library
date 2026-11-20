import { STATUSES } from "../data";

function ReadingList({ items, books, onRemove, onStatusChange }) {
  return (
    <aside className="reading-list"> 
      <h2>Reading list</h2>
      {items.length === 0 ? (
        <p className="empty">Your reading list is empty</p>
      ) : (
        items.map((item) => {
          const book = item.book || books.find((b) => b.id === item.id);
          if (!book) return null;
          const coverUrl = book.coverId
            ? `https://covers.openlibrary.org/b/id/${book.coverId}-S.jpg`
            : null;
          return (
            <div key={item.id} className="list-item">
              {coverUrl ? (
                <img className="list-swatch" src={coverUrl} alt="" />
              ) : (
                <div className="list-swatch list-swatch-placeholder" />
              )}
              <div className="list-details">
                <strong>{book.title}</strong>
                <small>{book.author}</small>
                <span className={`status status-${item.status.replace(/\s/g, "-").toLowerCase()}`}>
                  {item.status}
                </span>
              </div>
              <select
                value={item.status}
                onChange={(e) => onStatusChange(item.id, e.target.value)}
              >
                {STATUSES.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
              <button className="remove" onClick={() => onRemove(item.id)}>✕</button>
            </div>
          );
        })
      )}
    </aside>
  );
}

export default ReadingList;
