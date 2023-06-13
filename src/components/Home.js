import React from "react";
import {useState} from "react"
const Home = () => {
  const [count] = useState(100);
  const [age, setAge] = useState(19)
  const handleClick = () => {
    setAge(age + 1)
  }

  return (
    <div className="App">
      <h2>State variable is {count}</h2>
      <h1>State variable is {age}</h1>


      <button onClick = {handleClick}>Click</button>
    </div>
  );
};

export default Home;
