class CheckWatchedMovies extends React.Component {
  constructor(props) {
    super(props) 
    
  }

  render() {
    return (
    <td>
      <table className="innerMostTable">
        <tbody>
          <tr>
          <th className="watched">
            <button className="button1">Watched</button>
          </th>
          <th className="toWatch">
            <button className="button2">ToWatch</button>
          </th>
        </tr>
        </tbody>
      </table>
    </td>
    )
  }
}


window.CheckWatchedMovies = CheckWatchedMovies;
