import React, { Component } from "react";
import Ninja from "./Components/Ninjas";
import "./App.css";


// container component
class App extends Component {
  state = {
    ninjas: [
      { 
        name: "ko", 
        age: 9, 
        id: 1
       },
      { 
        name: "kojnjk",
        age: 909, 
        id: 2 
      },
      { 
        name: "kokj", 
        age: 90, 
        id: 3 
      }
    ]
  };
  render() {
    return (
      <div className="App">
        <h1>hello</h1>
        <Ninja ninjas = {this.state.ninjas}/>
      </div>
    );
  }
}

export default App;
