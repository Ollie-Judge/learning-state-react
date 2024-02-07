import { useState } from "react";
import "./style/App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="card">
        <p>count is {count}</p>
        <button onClick={() => setCount((count) => count + 1)}>+</button>
        <button onClick={() => setCount((count) => count - 1)}>-</button>
      </div>
    </>
  );
}

export default App;
