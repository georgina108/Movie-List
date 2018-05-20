class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      movies: movieListData
    };
  }


  handleSearch(selection) {
    var searched = selection
    this.checkMovieNames(searched);
  }

  checkMovieNames(search) {
    var queue = [];
    this.state.movies.forEach(function(movie) {
      if(movie.title.includes(search)) {
        queue.push(movie)
      }
    })
    this.changeMoviesListOnSearch(queue)
  }

  changeMovieListOnSearch(movieList) {
    if(movieList.length) {
      this.setState({
          movies: movieList
      })
    } else {
      this.setState({
          movies:[{title: "No movie by that name found"}]
      })
    }
  }

  render() {
    return (
      <div>
       <table className="mainTable">
        <tbody>
          <tr>
            <th className="header">MovieList</th>
          </tr>
          <tr>
            <td>
              <table className="innerTable">
                <MovieList movies={this.state.movies} handleSearch={this.handleSearch.bind(this)}/>
              </table>
            </td>
          </tr>
        </tbody>
        </table>
      </div>
    )
  }
}


window.App = App;