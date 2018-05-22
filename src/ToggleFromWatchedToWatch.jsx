class ToggleFromWatchedToWatch extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {
        status: ''
    }
  
  }


 
  handleToggle (e) {
    if(e.target.value === 'true') {
        e.target.innerText = 'watched'
        e.target.value = 'false'
    } else {
      (e.target.value === 'false') 
        e.target.innerText = 'toWatch'
        e.target.value = 'true'
    }
  }




  render() {
    return (
      <button text="watched" value="true" className="watchedButton" onClick={this.handleToggle.bind(this)}>ToWatch</button>
    )
  }
}


window.ToggleFromWatchedToWatch = ToggleFromWatchedToWatch;
