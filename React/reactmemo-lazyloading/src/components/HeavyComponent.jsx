import React from "react";
function HeavyComponent() {
  console.log("HeavyComponent rendered!");

  let total = 0;
  for (let i = 0; i < 100000000; i++) {
    total += i;
  }

  return (
    <div style={{ border: "2px solid black", padding: "10px" }}>
      <h2>Heavy Component</h2>
      <p>This component is expensive to render!</p>
    </div>
  );
}
export default React.memo(HeavyComponent);
