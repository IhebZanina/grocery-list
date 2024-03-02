import { useState } from "react";
import "./App.css";
import groceryCart from "./assets/grocery-cart.png";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [groceryItems, SetGroceryItems] = useState([]);

  const handleChangeInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddGroceryItem = (e) => {
    if (e.key === "Enter") {
      if (inputValue) {
        SetGroceryItems([
          ...groceryItems,
          {
            quantity: 1,
            name: inputValue,
            completed: false,
          },
        ]);
        setInputValue("");
      }
    }
  };

  const renderGroceryList = () => {
    return groceryItems.map((item) => (
      <li>
        <div className="container">
          <input type="checkbox" />
          <p>{item.name}</p>
        </div>
        <div>
          <button className="remove-button">X</button>
        </div>
      </li>
    ));
  };

  return (
    <main className="App">
      <div>
        <div>
          <h4 className="success">You are done</h4>
          <div className="header">
            <h1>Shopping List</h1>
            <img src={groceryCart} alt="Shopping" />
            <input
              type="text"
              placeholder="Add an Item"
              className="item-input"
              onChange={handleChangeInputValue}
              onKeyDown={handleAddGroceryItem}
              value={inputValue}
            />
          </div>
        </div>
        <ul>{renderGroceryList()}</ul>
      </div>
    </main>
  );
};

export default App;
