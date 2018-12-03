
import AddMovie from './AddMovie.js';
import Search from './Search.js';
import WatchState from './WatchState.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [
        {title: 'Mean Girls', watched: 'Watched'},
        {title: 'Hackers', watched: 'To Watch'},
        {title: 'The Grey', watched: 'Watched'},
        {title: 'Sunshine', watched: 'To Watch'},
        {title: 'Ex Machina', watched: 'To Watch'}],
      selectedWatchState: 'Watched'};
  }

  addMovie(movie) {
    this.state.movies.push({
      title: movie,
      watched: 'To Watch'});
    this.forceUpdate();
  }

  toggleWatchedState(selectedMovie) {
    _.each(this.state.movies, (movie) => {
      if (selectedMovie === movie.title) {
        movie.watched === 'Watched' ? movie.watched = 'To Watch' : movie.watched = 'Watched';
      }
    });
    this.forceUpdate();
  }

  updateGlobalWatchState(clickedWatchState) {
    this.setState({selectedWatchState: clickedWatchState});
    this.forceUpdate();
  }

  render() {
    return (
      <div className = 'container'>
        <h1 className='title'>MovieList</h1>
        <AddMovie addMovie = {this.addMovie.bind(this)}/>
        <WatchState updateGlobalWatchState={this.updateGlobalWatchState.bind(this)}/>
        <Search 
          allMovies ={this.state.movies}
          toggleWatchedState ={this.toggleWatchedState.bind(this)}
          selectedWatchState={this.state.selectedWatchState}/>
      </div>
    );
  }
} 

export default App;

