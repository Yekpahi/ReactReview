import React from "react";
//import Home from "./components/Home"
//import CounterFnSetState from "./components/SetState";
import Welcome from "./components/Welcome";
function App() {
const greetingObject = {greeting : "Bienvenue chez nous"}
const mystyle = { color : 'red'}
return (
    <div className="App">
      {/*<Home/>*/}
      {/*<CounterFnSetState />*/}
      <Welcome style = {mystyle} text = {greetingObject}/>
    </div>
  );
}

export default App;
