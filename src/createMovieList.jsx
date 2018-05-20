class CreateMovieList extends React.Component {
 constructor(props) {
  super(props) 
 }

render () {
    return (
       <div>
        <input type="text" placeholder="Add movie title here"/>
        <input
          className='button'
          type="button"
          value="Add"
        />
      </div>
    )
  }

}

window.CreateMovieList = CreateMovieList;