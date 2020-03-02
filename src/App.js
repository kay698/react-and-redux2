import React, { Component } from "react";
import Ninja from "./Components/Ninjas";
import AddNinja from './Components/addNinja'
import "./App.css";


// container component
class App extends Component {
  state = {
    ninjas: [
      { 
        name: "ko", 
        age: 16, 
        id: 1
       },
      { 
        name: "kojnjk",
        age: 22, 
        id: 2 
      },
      { 
        name: "kokj", 
        age: 40, 
        id: 3 
      }
    ]
  };
  render() {
    return (
      <div className="App">
        <h1>hello</h1>
        <Ninja ninjas = {this.state.ninjas}/>
        <AddNinja/>
      </div>
    );
  }
}

export default App;
