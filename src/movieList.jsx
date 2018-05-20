class MovieList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: this.props.movies
    }
  }

handleMovieAdditions(addition) {
  var newState = this.state.movies;
  newState.push({title:addition});
  this.setState({
    movies: newState
  })
}

handleMovieListChanges(newList) {
    if(newList.length > 0) {
      this.setState({
        movies: newList
      })
    } else {
      this.setState({
        movies: [{title:"No movie by that name found"}]
      })
    }
  }

  render () {
    return (
      <tbody>
         <tr>
          <th>
            <CreateMovieList handleMovieAdditions={this.handleMovieAdditions.bind(this)}/>
          </th>
        </tr>
        <tr>
          <th>
            <Search movies={this.state.movies} handleMovieListChanges = {this.handleMovieListChanges.bind(this)}/>
          </th>
        </tr>
          {this.state.movies.map((movie, i) => 
            <tr key={i}>
              <td>{movie.title}</td>
            </tr>
          )} 
      </tbody>

    ) 
  }

}


window.MovieList = MovieList;


  
