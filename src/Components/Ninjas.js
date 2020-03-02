import React, { Component } from 'react';

// ui component (turned into a functional component because it does not have a state)
const Ninja = (props) =>{
    const {ninjas} = props;
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

export default Ninja;