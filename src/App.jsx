import { useState } from "react";
import { books } from "./data";
import BookCard from "./components/BookCard";
import ReadingList from "./components/ReadingList";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("All");
  const [sortByRating, setSortByRating] = useState(false);
  // readingList holds { id, status } where id is the book's id
  const [readingList, setReadingList] = useState([]);

  // Derived values: calculated while rendering, not stored in state
  const genres = ["All", ...new Set(books.map((b) => b.genre))];

  const query = search.trim().toLowerCase();
  let visibleBooks = books.filter((b) => {
    const matchesSearch =
      b.title.toLowerCase().includes(query) ||
      b.author.toLowerCase().includes(query);
    const matchesGenre = genre === "All" || b.genre === genre;
    return matchesSearch && matchesGenre;
  });
  if (sortByRating) {
    visibleBooks = [...visibleBooks].sort((a, b) => b.rating - a.rating);
  }

  const isAdded = (id) => readingList.some((item) => item.id === id);

  function handleAdd(id) {
    if (isAdded(id)) return;
    setReadingList([...readingList, { id, status: "Want to read" }]);
  }

  function handleRemove(id) {
    setReadingList(readingList.filter((item) => item.id !== id));
  }

  function handleStatusChange(id, status) {
    setReadingList(
      readingList.map((item) => (item.id === id ? { ...item, status } : item))
    );
  }

  return (
    <div className="app">
      <header className="header">
        <h1>📚 Book Library</h1>
        <span className="badge">My reading list ({readingList.length})</span>
      </header>

      <input
        className="search"
        type="text"
        placeholder="Search by title or author..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="filters">
        {genres.map((g) => (
          <button
            key={g}
            className={g === genre ? "genre-btn active" : "genre-btn"}
            onClick={() => setGenre(g)}
          >
            {g}
          </button>
        ))}
        <button
          className={sortByRating ? "genre-btn active" : "genre-btn"}
          onClick={() => setSortByRating(!sortByRating)}
        >
          ⭐ Sort by rating
        </button>
      </div>

      <div className="layout">
        <section className="books">
          {visibleBooks.length === 0 ? (
            <p className="empty">No books found</p>
          ) : (
            visibleBooks.map((book) => (
              <BookCard
                key={book.id}
                book={book}
                added={isAdded(book.id)}
                onAdd={() => handleAdd(book.id)}
              />
            ))
          )}
        </section>

        <ReadingList
          items={readingList}
          books={books}
          onRemove={handleRemove}
          onStatusChange={handleStatusChange}
        />
      </div>
    </div>
  );
}

export default App;
