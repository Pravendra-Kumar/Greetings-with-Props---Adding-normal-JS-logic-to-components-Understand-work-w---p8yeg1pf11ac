import React from "react";
import '../styles/App.css';

const Welcome = (props) => {
  return (
    <div>
        <h1>Hey {props.name}!</h1>
        <h2>Welcome to Newton School.</h2>
    </div>
  )
}


export default Welcome;
