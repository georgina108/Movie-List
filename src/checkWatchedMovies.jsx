class CheckWatchedMovies extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {
      movies:this.props.movies
    }
  }

  filterAllWatched(e) {
    var arr = [];
    this.state.movies.forEach(function(movie){
      console.log(key)
    })
  }

  filterAllToWatch() {
  console.log(this.state.movies)
  }
  
  render() {
    return (
    <td>
      <table className="innerMostTable">
        <tbody>
          <tr>
          <th className="watched">
            <button className="button1" onClick={this.filterAllWatched.bind(this)}>Watched</button>
          </th>
          <th className="toWatch">
            <button className="button2" onClick={this.filterAllToWatch.bind(this)}>ToWatch</button>
          </th>
        </tr>
        </tbody>
      </table>
    </td>
    )
  }
}


window.CheckWatchedMovies = CheckWatchedMovies;
