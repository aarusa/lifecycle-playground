import { useState } from "react";

function App() {

  const [showLogger, setShowLogger] = useState(false);

  return(
    <div className="container">
      <h2>React Lifecycle Playground</h2>

      {/* Toggle Lifecyclelogger */}
      <button className="primary-btn" onClick={() => setShowLogger(!showLogger)}>
        {showLogger ? 'Unmount Logger': 'Mount Logger'}
      </button>

      {showLogger && <div>Lifecycle Logger Here</div>}
    </div>
  );
}

export default App;