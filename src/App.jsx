import { useState } from "react";
import LifecycleLogger from "./components/LifecycleLogger";

function App() {

  const [showLogger, setShowLogger] = useState(false);

  return (
    <div className="container">
      <h2>React Lifecycle Playground</h2>
      <button className="primary-btn" onClick={() => setShowLogger(!showLogger)}>
          {showLogger ? 'Unmount Logger': 'Mount Logger'}
      </button>
      { showLogger && <LifecycleLogger message='Hello props' />}
    </div>
  );
}

export default App;