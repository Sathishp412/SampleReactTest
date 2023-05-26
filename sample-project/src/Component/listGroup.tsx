import { MouseEvent, useState } from "react";
function ListGroup() {
  let listItem = ["Coffee", "Tea", "Milk", "Black Tea", "LemonTea"];
  //listItem = [];
  const handleClick = (event: MouseEvent) => console.log(event);

  const [active, setActive] = useState(-1);

  return (
    <>
      <h1>Dynamic list</h1>
      {listItem.length === 0 && <p> No items found in the list </p>}
      <ul className="list-group">
        {listItem.map((x, index) => (
          <li
            className={
              index === active ? "list-group-item active" : "list-group-item"
            }
            key={x}
            // onClick={() => console.log(x + " " + index)}
            onClick={() => setActive(index)}
          >
            {x}
          </li>
        ))}
        {/*<li className="list-group-item">Coffee</li>
      <li className="list-group-item">Tea</li>
      <li className="list-group-item">Milk</li>
      <li className="list-group-item">Black Tea</li>
        <li className="list-group-item">Lemon Tea1</li>*/}
      </ul>
    </>
  );
}
export default ListGroup;
