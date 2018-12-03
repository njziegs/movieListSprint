var RenderMovie = ({movieName, toggleWatchedState}) => {

  var toggleMovie = function() {
    toggleWatchedState(movieName.title);
  };

  return (
    <div className = 'wrapper'>
      <div className = 'movie-list'>{movieName.title} 
        <button type = 'button' onClick={toggleMovie} >{movieName.watched}</button>
      </div>
    </div>
  );
};

export default RenderMovie;