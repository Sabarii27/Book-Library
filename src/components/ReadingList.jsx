import './ReadingList.css'

function ReadingList({ items }) {
  return (
    <aside className="reading-list">
      <h2>My reading list</h2>
      {items.map((item) => (
        <div className="rl-item" key={item.id}>
          <div className="rl-cover" style={{ backgroundColor: item.color }} />
          <div className="rl-text">
            <h4>{item.title}</h4>
            <p>{item.author}</p>
            <span className={`status ${item.status.toLowerCase().replace(/ /g, '-')}`}>
              {item.status}
            </span>
          </div>
        </div>
      ))}
    </aside>
  )
}

export default ReadingList
