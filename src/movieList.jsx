class MovieList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: this.props.movies,
      notFound: "No movie by that name found"
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
      this.setState({
        movies: newList
      })
  }

  render () {
    return (
      <tbody>
         <tr>
          <th>
            <CreateMovieList handleMovieAdditions={this.handleMovieAdditions.bind(this)}/>
          </th>
        </tr>
        <tr className="search">
          <th>
            <Search movies={this.state.movies} handleMovieListChanges = {this.handleMovieListChanges.bind(this)}/>
          </th>
        </tr>
        <tr>
          <CheckWatchedMovies/>
        </tr>

        {this.state.movies.length ?  this.state.movies.map((movie, i) => 
                <tr key={i}>
                 <td>{movie.title}</td>
                 <td>
                   <ToggleFromWatchedToWatch/>
                </td>
                </tr>
              ) : 
          <tr>
              <td>{this.state.notFound}</td>
          </tr>


        }
      </tbody>

    ) 
  }

}


window.MovieList = MovieList;


  
