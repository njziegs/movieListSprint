
import RenderMovieList from './RenderMovieList.js';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {value: '',
      finaValue: ''};
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    this.setState(
      {value: this.state.value,
        finalValue: this.state.value}); 

    event.preventDefault();
  }



  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label>
          Search for a movie:
            <input type='text' value={this.state.value} onChange={this.handleChange.bind(this)}/>
          </label>
          <input type='submit' value='Go!'/>
        </form>

        <div className='movie-list'>
          <RenderMovieList 
            moviesArray={this.props.allMovies} 
            searchStr={this.state.finalValue} 
            toggleWatchedState ={this.props.toggleWatchedState}
            selectedWatchState={this.props.selectedWatchState}
          />
        </div>
      </div>
    );
  }
}

export default Search;
