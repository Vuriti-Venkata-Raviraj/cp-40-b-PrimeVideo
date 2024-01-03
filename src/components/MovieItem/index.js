// Write your code here
import {Component} from 'react'
import ReactPlayer from 'react-player'
import Popup from 'reactjs-popup'
import {IoMdClose} from 'react-icons/io'

import 'reactjs-popup/dist/index.css'
import './index.css'

class MovieItem extends Component {
  state = {isPlaying: false}

  onClickPlay = () => {
    this.setState(prevState => ({isPlaying: !prevState.isPlaying}))
  }

  render() {
    const {movie} = this.props
    const {thumbnailUrl, videoUrl} = movie
    const {isPlaying} = this.state
    return (
      <div>
        <Popup
          modal
          trigger={
            <button
              type="button"
              className="trigger-button triggered"
              onClick={this.player}
            >
              <img src={thumbnailUrl} alt="thumbnail" />
            </button>
          }
        >
          {close => (
            <div className="video-container">
              <div className="responsive-container play-container">
                <ReactPlayer url={videoUrl} playing={isPlaying} />
                <button
                  type="button"
                  aria-label="Some label"
                  data-testid="closeButton"
                  className="close-btn"
                  onClick={() => close()}
                >
                  <IoMdClose size="30" />
                </button>
              </div>
            </div>
          )}
        </Popup>
      </div>
    )
  }
}

export default MovieItem
