var WatchState = ({updateGlobalWatchState}) => {

  var seeWatchedMovies = function() {
    updateGlobalWatchState('Watched');
  };

  var seeToWatchMovies = function() {
    updateGlobalWatchState('To Watch');
  };

  return (

    <div className = 'toggleButtons'>
      <button type = 'button' onClick={seeWatchedMovies} >Watched</button>
      <button type = 'button' onClick={seeToWatchMovies} >To Watch</button>
    </div>
  );
};

export default WatchState;