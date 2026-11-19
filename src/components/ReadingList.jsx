import { STATUSES } from "../data";

function ReadingList({ items, books, onRemove, onStatusChange }) {
  const coverColors = ["#2452d8", "#a8143d", "#c54212", "#137c76"];

  return (
    <aside className="reading-list">
      <h2>Reading list</h2>
      {items.length === 0 ? (
        <p className="empty">Your reading list is empty</p>
      ) : (
        items.map((item) => {
          const book = books.find((b) => b.id === item.id);
          return (
            <div key={item.id} className="list-item">
              <div className="list-swatch" style={{ background: coverColors[item.id % coverColors.length] }} />
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
