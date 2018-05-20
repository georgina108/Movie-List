class MovieList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      movies: this.props.movies
    }
  }

  render () {
    return (
      <tbody>
        <tr>
          <th>
            <Search/>
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


  
