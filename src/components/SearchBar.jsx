import './SearchBar.css'

function SearchBar() {
  return (
    <div className="search">
      <span className="search-icon">🔍</span>
      <input type="text" placeholder="Search by title or author" />
    </div>
  )
}

export default SearchBar
