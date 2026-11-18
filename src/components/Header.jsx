import './Header.css'

function Header({ count }) {
  return (
    <header className="header">
      <h1 className="logo">
        Book<span>Library</span>
      </h1>
      <button className="badge-btn">📖 My reading list ({count})</button>
    </header>
  )
}

export default Header
