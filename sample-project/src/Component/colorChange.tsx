import { useState } from "react";

function ColorChange() {
  const [color, setColor] = useState("Blue");

  return (
    <div>
      My favourite clour is {color} <br></br>
      <button onClick={() => setColor("white")}>Change Color..</button>
    </div>
  );
}
export default ColorChange;
