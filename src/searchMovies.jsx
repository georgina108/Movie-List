class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
  }
  
  handleChange (e) {
    this.setState({
      value:e.target.value
    })
  }

  handleClick () {
    var newMovieList = [];
    var movies = this.props.movies
    for(var i = 0; i < movies.length; i++) {
        if(movies[i].title.toLowerCase().includes(this.state.value.toLowerCase())) {
          newMovieList.push(movies[i])
        }
    }
    this.props.handleMovieListChanges(newMovieList)
  }
  
  render () {
    return (
       <div>
        <input type="text" placeholder="Search..." value={this.state.value} onChange={this.handleChange.bind(this)} />
        <input
          type="button"
          value="Go!"
          onClick={this.handleClick.bind(this)}
        />
      </div>
    )
  }
}

window.Search = Search;