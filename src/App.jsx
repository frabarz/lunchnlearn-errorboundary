import classNames from "classnames";
import React, {useState} from "react";
import "./App.css";
import Logo from "./Logo";
import Dependency from "./Dependency";
import Boundary from "./Boundary";

function App() {
  // All's right with the world.
  const [stop, setStop] = useState(false);
  const toggleStop = () => setStop(!stop);

  return (
    <div className="App">
      <header className="header">
        <h1>My error-proof React app</h1>
        
        <Logo className={classNames("datawheel", {stop})} onClick={toggleStop} />

        <p>Nothing can go wrong. Nope.</p>

        <Dependency label="A wild external dependency appears!" />

        <Boundary>
          <Dependency label="An external dependency appears, but now I'm prepared!" />
        </Boundary>
      </header>
    </div>
  );
}

export default App;
