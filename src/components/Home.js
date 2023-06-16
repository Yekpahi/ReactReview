import React from "react";
import { useState } from "react";
const Home = () => {
  //const [count] = useState(100);
  //const [age, setAge] = useState(19)
  //const [siblingsNum, setSiblingsNum] = useState(10)

  const [state, setState] = useState({ age: 19, siblingsNum: 4 });
  const handleClick = (val) =>
    setState({
      ...state,
      [val]: state[val] + 1,
    });

  const { age, siblingsNum } = state;

  /*const handleClick = () => {
    setAge(age + 1)
  }
  const handleSiblingsNum = () => {
    setSiblingsNum(siblingsNum + 1)
  }
*/
  return (
    <div className="App">
      {/* <h2>State variable is {count}</h2>
      <h1>State variable is {age}</h1>
      <p>I have {siblingsNum} siblings</p>

      <button onClick={handleSiblingsNum}>
            More siblings! 
        </button>
      <button onClick = {handleClick}>Click</button> */}
      <p>Today I am {age} Years of age</p>
      <p>I have {siblingsNum} siblings</p>

      <button onClick={handleClick.bind(null, "age")}>Get older!</button>
      <button onClick={handleClick.bind(null, "siblingsNum")}>
        More siblings!
      </button>
    </div>
  );
};

export default Home;
