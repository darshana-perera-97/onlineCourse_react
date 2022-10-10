import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Design from "./Design/Design";

function App() {
  const [load, setLoad] = React.useState(true);
  setTimeout(() => {
    setLoad(false);
  }, 3000);

  return (
    // <div>
    //   {load && (
    //     <div className="App">
    //       <header className="App-header">
    //         <img src={logo} className="App-logo" alt="logo" />
    //         <p>
    //           Edit <code>src/App.js</code> and save to reload.
    //         </p>
    //         <a
    //           className="App-link"
    //           href="https://reactjs.org"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //         >
    //           Learn React
    //         </a>
    //       </header>
    //     </div>
    //   )}
    //   {load && <Design />}
    // </div>
    <div>
      <Design />
    </div>
  );
}

export default App;
