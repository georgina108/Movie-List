class CreateMovieList extends React.Component {
 constructor(props) {
  super(props) 
  this.state = {
    input: ''
  }
 }

 handleAddTitle (e) {
    this.setState({
      input:e.target.value
    })
  }

  handleClickAdd() {
    this.props.handleMovieAdditions(this.state.input)
  }

render () {
    return (
       <div>
        <input type="text" placeholder="Add movie title here" onChange={this.handleAddTitle.bind(this)}/>
        <input
          className='button'
          type="button"
          value="Add"
          onClick={this.handleClickAdd.bind(this)}
        />
      </div>
    )
  }

}

window.CreateMovieList = CreateMovieList;