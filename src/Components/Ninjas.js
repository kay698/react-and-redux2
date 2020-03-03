import React, { Component } from 'react';
import '../Css/Ninja.css'
// ui component (turned into a functional component because it does not have a state)
const Ninja = ({ninjas, deleteNinja}) =>{
  
 return (
   ninjas.map(ninja => {
     return  (
        <div className="ninjas" key = {ninja.id}>
           {/* <h1>hello, i'm a Ninja</h1>; */}
           <p>name: {ninja.name}</p>
           <p>age: {ninja.age}</p>
           <button onClick={() => {deleteNinja(ninja.id)}}>Delete Ninja</button>
        </div>
      )  
    })
    
    )
  
}

export default Ninja;