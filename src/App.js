import Floc from "./Floc";
import { useState } from "react";

function App() {
  const [flake, setFlake] = useState({
    vt: 0.55,
    wind: 0.1,
    size: 20,
    rinicial: 0,
    rfinal: 360,
  });
  return (
    <div className="App">
      <Floc flake={flake} />
    </div>
  );
}

export default App;
