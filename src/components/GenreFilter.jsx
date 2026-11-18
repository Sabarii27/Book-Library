import './GenreFilter.css'

function GenreFilter({ genres, active }) {
  return (
    <div className="genres">
      {genres.map((genre) => (
        <button
          key={genre}
          className={genre === active ? 'genre-btn active' : 'genre-btn'}
        >
          {genre}
        </button>
      ))}
    </div>
  )
}

export default GenreFilter
