import { useState } from "react";

function Menu() {
  let listItem = ["Coffee", "Tea", "Milk", "Black Tea", "LemonTea"];
  //listItem = [];
  const [active, setActive] = useState(-1);

  return (
    <>
      <h1>Menu items</h1>
      {listItem.length === 0 && <p>No items found in the menu list</p>}
      <ul className="list-group">
        {listItem.map((x, index) => (
          <li
            className={
              index === active ? "list-group-item active" : "list-group-item"
            }
            key={x}
            //onClick={() => console.log(x + " " + index)}
            onClick={() => setActive(index)}
          >
            {x}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Menu;
