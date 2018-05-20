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
    console.log(this.state.value)
  }
  

  render () {
    return (
       <div>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <input
          type="button"
          value="Go!"
          onClick={this.handleClick}
        />
      </div>
    )
  }
}

window.Search = Search;