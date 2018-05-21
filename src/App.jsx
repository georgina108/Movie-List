class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      movies: movieListData;
    };
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
                <MovieList movies={this.state.movies}/>
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