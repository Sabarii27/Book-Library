import { useEffect, useState } from "react";
import { fetchGenreBooks, searchBooks } from "./api";
import BookCard from "./components/BookCard";
import ReadingList from "./components/ReadingList";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [submittedSearch, setSubmittedSearch] = useState("");
  const [genre, setGenre] = useState("Fiction");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [readingList, setReadingList] = useState([]);

  const genres = ["Fiction", "Biography", "Science", "History", "Mystery"];

  useEffect(() => {
    let ignore = false;

    async function loadBooks() {
      setLoading(true);
      setError("");

      try {
        const results = submittedSearch
          ? await searchBooks(submittedSearch)
          : await fetchGenreBooks(genre);
        if (!ignore) setBooks(results);
      } catch (err) {
        if (!ignore) {
          setBooks([]);
          setError(err.message || "Unable to load books.");
        }
      } finally {
        if (!ignore) setLoading(false);
      }
    }

    loadBooks();
    return () => {
      ignore = true;
    };
  }, [genre, submittedSearch]);

  const isAdded = (id) => readingList.some((item) => item.id === id);

  function handleAdd(book) {
    if (isAdded(book.id)) return;
    setReadingList([
      ...readingList,
      { id: book.id, book, status: "Want to read" },
    ]);
  }

  function handleRemove(id) {
    setReadingList(readingList.filter((item) => item.id !== id));
  }

  function handleStatusChange(id, status) {
    setReadingList(
      readingList.map((item) => (item.id === id ? { ...item, status } : item))
    );
  }

  function handleGenreChange(nextGenre) {
    setSearch("");
    setSubmittedSearch("");
    setGenre(nextGenre);
  }

  function handleSearchSubmit(event) {
    event.preventDefault();
    setSubmittedSearch(search.trim());
  }

  return (
    <div className="app">
      <header className="header">
        <h1>📚 Book Library</h1>
        <span className="badge">My reading list ({readingList.length})</span>
      </header>

      <form onSubmit={handleSearchSubmit}>
        <div className="search-row">
          <input
            className="search"
            type="text"
            placeholder="Search by title or author..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="search-button" type="submit">Search</button>
        </div>
      </form>

      <div className="filters">
        {genres.map((g) => (
          <button
            key={g}
            className={g === genre && !submittedSearch ? "genre-btn active" : "genre-btn"}
            onClick={() => handleGenreChange(g)}
          >
            {g}
          </button>
        ))}
      </div>

      <div className="layout">
        <section className="books">
          {loading ? (
            <p className="status-message">Loading…</p>
          ) : error ? (
            <p className="status-message error">Error: {error}</p>
          ) : books.length === 0 ? (
            <p className="empty">No books found</p>
          ) : (
            books.map((book) => (
              <BookCard
                key={book.id}
                book={book}
                added={isAdded(book.id)}
                onAdd={() => handleAdd(book)}
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
