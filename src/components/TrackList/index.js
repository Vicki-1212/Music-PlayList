import './index.css'
import {FiTrash} from 'react-icons/fi'

const TrackList = props => {
  const {listDetails, deleteTrackList} = props
  const {id, imageUrl, name, genre, duration} = listDetails

  const onclickDeletebutton = () => {
    deleteTrackList(id)
  }

  return (
    <li className="list-items">
      <div className="song-info-container">
        <img src={imageUrl} alt="track" className="track-image" />
        <div className="song-name-details">
          <p className="song-name">{name}</p>
          <p className="song-genre">{genre}</p>
        </div>
      </div>
      <div className="song-time-delete-container">
        <p className="time">{duration}</p>
        <button
          className="delete-button"
          type="button"
          data-testid="delete"
          onClick={onclickDeletebutton}
        >
          <FiTrash className="delete-icon" />
        </button>
      </div>
    </li>
  )
}

export default TrackList
