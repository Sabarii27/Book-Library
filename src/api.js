const BASE_URL = "https://openlibrary.org";

async function getJson(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Request failed (${response.status})`);
  }
  return response.json();
}

function normalizeBook(book, genre, source) {
  const author =
    source === "search"
      ? book.author_name?.[0]
      : book.authors?.[0]?.name;

  const coverId =
    source === "search" ? book.cover_i : book.cover_id;

  return {
    id: book.key || `${book.title}-${coverId || ""}`,
    title: book.title || "Untitled",
    author: author || "Unknown author",
    year: book.first_publish_year || null,
    genre,
    coverId: coverId || null,
  };
}

export async function fetchGenreBooks(genre) {
  const subject = encodeURIComponent(genre.toLowerCase());
  const data = await getJson(`${BASE_URL}/subjects/${subject}.json?limit=12`);
  return (data.works || []).map((book) =>
    normalizeBook(book, genre, "subject")
  );
}

export async function searchBooks(query) {
  const searchQuery = encodeURIComponent(query.trim());
  const data = await getJson(
    `${BASE_URL}/search.json?q=${searchQuery}&limit=12`
  );
  return (data.docs || []).map((book) =>
    normalizeBook(book, "Search result", "search")
  );
}
