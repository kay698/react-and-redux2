import React, { Component } from 'react';


class Ninja extends Component {
    
  render () {
    
    const {ninjas} = this.props;
    console.log(ninjas)
    const ninjaList = ninjas.map(ninja => {

      return (
        <div className="App" key = {ninja.id}>
          {/* <h1>hello, i'm a Ninja</h1>; */}
          <p>name: {ninja.name}</p>
          <p>age: {ninja.age}</p>
        </div>
      )
    })
    return (
        <div className = "ninja-list">
           {ninjaList}
        </div>
    )
  }
}

export default Ninja;