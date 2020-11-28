import React from 'react';
import './App.css';
import logo from './fav.jpg'

class App extends React.Component{
  url = 'https://www.google.com/'

  constructor(){
    super();
    this.state = {
      title: 'Hello from bridgelabz'
    }
  }

  //onClick function
  onClick = ($event) => {
    console.log("Save button is clicked ", $event);
    window.open(this.url, "_blank");
  }

  render(){
    return (
      <div>
        <h1>
          {this.state.title}
        </h1>
        <img src={logo} onClick={this.onClick} alt="The bridgelabz logo"/>
      </div>
    );
  }
}

export default App;