// Write your code here
import {Component} from 'react'
import MoviesSlider from '../MoviesSlider'
import './index.css'

class PrimeVideo extends Component {
  render() {
    const {moviesList} = this.props
    const action = moviesList.filter(movies => movies.categoryId === 'ACTION')
    const comedy = moviesList.filter(movies => movies.categoryId === 'COMEDY')
    return (
      <div className="main-container">
        <nav className="nav-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
            alt="prime video"
            className="prime-logo"
          />
        </nav>
        <div className="movie-genre-container">
          <div>
            <h1 className="movie-genre-titles">Action Movies</h1>
            <MoviesSlider moviesList={action} />
          </div>
          <div>
            <h1 className="movie-genre-titles">Comedy Movies</h1>
            <MoviesSlider moviesList={comedy} />
          </div>
        </div>
      </div>
    )
  }
}

export default PrimeVideo
