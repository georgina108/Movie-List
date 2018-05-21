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
    var arr = this.state.input.split(' ');
    var camelCaseStr = arr.map(function(word) {
     word = word.split('');
     word[0]= word[0].toUpperCase();
     return word.join('') 
    }).join(' ');
    this.props.handleMovieAdditions(camelCaseStr)
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