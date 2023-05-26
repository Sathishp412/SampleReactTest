function Menu() {
  let listItem = ["Coffee", "Tea", "Milk", "Black Tea", "LemonTea"];
  //listItem = [];

  return (
    <>
      <h1>Menu items</h1>
      {listItem.length === 0 && <p>No items found in the menu list</p>}
      <ul className="list-group">
        {listItem.map((x, index) => (
          <li
            className="list-group-item"
            key={x}
            onClick={() => console.log(x + " " + index)}
          >
            {x}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Menu;
