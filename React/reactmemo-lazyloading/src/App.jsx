import React, { useState, lazy, Suspense } from "react";

const HeavyComponent = lazy(() => import("./components/HeavyComponent"));

function App() {
  const [counter, setCounter] = useState(0);
  console.log("App rendered");

  return (
    <div>
      <h1>React.memo & Lazy Loading</h1>
      <h2>Counter: {counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>Increment Counter</button>
      <hr />

      <Suspense fallback={<p>Loading Heavy Component....</p>}>
        <HeavyComponent />
      </Suspense>
    </div>
  );
}
export default App;
