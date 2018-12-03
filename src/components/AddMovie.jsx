

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {value: '',
				finalValue: ''};
  }

  handleChange(event) {
    this.setState({value: event.target.value});
   // event.preventDefault()
  }

  handleSubmit(event) {
   this.setState(
    {value: this.state.value}); 
   event.preventDefault();
    this.props.addMovie(this.state.value);
   //console.log(this.state.finalValue)
  }


  addNameToForm() {

  }

  render() {
  	return (
  		<form onSubmit = {this.handleSubmit.bind(this)}>
  		  <label>
  		    Add movie:
  		    <input type = 'text' value = {this.state.value} onChange = {this.handleChange.bind(this)} />
  		  </label>
  		  <input type = 'submit' value = 'Add' />
  		</form>
  		)
  }
}

export default AddMovie;
