import React, { Component } from 'react';

// ui component (turned into a functional component because it does not have a state)
const Ninja = ({ninjas}) =>{
  
  // if conditionals
    // const ninjaList = ninjas.map(ninja => {
    //   if(ninja.age > 20){
    //   return (
    //     <div className="App" key = {ninja.id}>
    //       {/* <h1>hello, i'm a Ninja</h1>; */}
    //       <p>name: {ninja.name}</p>
    //       <p>age: {ninja.age}</p>
    //     </div>
    //   )
    //   } else{
    //     return null
    //   }
    // })

    // tenary conditionals
 return (
   ninjas.map(ninja => {
     return  ninja.age > 20 ? (
        <div className="App" key = {ninja.id}>
           {/* <h1>hello, i'm a Ninja</h1>; */}
           <p>name: {ninja.name}</p>
           <p>age: {ninja.age}</p>
        </div>
      )  : null
    })
   
    )
  
}

export default Ninja;