 import RenderMovie from './RenderMovie.js'

var RenderMovieList = ({moviesArray, searchStr, toggleWatchedState, selectedWatchState}) => {

	if (searchStr !== undefined) {
		moviesArray = moviesArray.filter((movie) => {
			return movie.title.includes(searchStr) && movie.watched === selectedWatchState
	})
	}
  return (

  <div>
    {moviesArray.map((movie) => 
    {
      return (
        <RenderMovie 
          movieName={movie}
          toggleWatchedState={toggleWatchedState}/>
      )
    })}
  </div>
  )
}

export default RenderMovieList;