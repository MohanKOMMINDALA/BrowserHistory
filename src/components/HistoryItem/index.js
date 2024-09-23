import './index.css'

const HistoryItem = props => {
  const {eachItem, onDeleteHistory} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = eachItem

  const deleteHistory = () => {
    onDeleteHistory(id)
  }

  return (
    <li>
      <div className="card-1">
        <p className="time">{timeAccessed}</p>
        <div className="card-2">
          <img src={logoUrl} className="logo-url" alt="domain logo" />
          <div className="card-3">
            <p className="title">{title}</p>
            <p className="span">{domainUrl}</p>
          </div>
        </div>
      </div>
      <button type="button" onClick={deleteHistory} data-testid="delete">
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default HistoryItem
