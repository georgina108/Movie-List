class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
  }
  
  
  
  handleChange (e) {
    this.setState({
      value: e.target.value
    });
    this.props.handleSearch(this.state.value)
  }
  

  render () {
    return (
       <div className="search-bar form-inline">
        <input
          className="form-control"
          type="text"
          value={this.state.value}
          // onChange={this.handleChange.bind(this)}
        />
        <button className="btn hidden-sm-down" id="searchButton" onClick={this.handleChange.bind(this)}>
        <span className="glyphicon glyphicon-search"></span>
        </button>
      </div>
    )
  }
}

window.Search = Search;