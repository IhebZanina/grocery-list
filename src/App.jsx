import { useState, useEffect } from "react";
import "./App.css";
import groceryCart from "./assets/grocery-cart.png";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [groceryItems, SetGroceryItems] = useState([]);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    determineCompletedStatus();
  }, [groceryItems]);
  const handleChangeInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const determineCompletedStatus = () => {
    if (!groceryItems.length) {
      return setIsCompleted(false);
    }
    let isAllCompleted = true;
    groceryItems.forEach((item) => {
      if (!item.completed) isAllCompleted = false;
    });
    setIsCompleted(isAllCompleted);
  };

  const handleAddGroceryItem = (e) => {
    if (e.key === "Enter") {
      if (inputValue) {
        const updatedGroceryList = [...groceryItems];
        const itemIndex = updatedGroceryList.findIndex(
          (item) => item.name === inputValue
        );
        if (itemIndex === -1) {
          updatedGroceryList.push({
            name: inputValue,
            quantity: 1,
            completed: false,
          });
        } else {
          updatedGroceryList[itemIndex].quantity++;
        }
        SetGroceryItems(updatedGroceryList);
        setInputValue("");
      }
    }
  };

  const handleRemoveItem = (name) => {
    const updatedGroceryList = [...groceryItems].filter(
      (item) => item.name !== name
    );
    SetGroceryItems(updatedGroceryList);
  };

  const handleUpdateCompleteStatus = (status, index) => {
    const updatedGroceryList = [...groceryItems];
    updatedGroceryList[index].completed = status;
    SetGroceryItems(updatedGroceryList);
  };

  const renderGroceryList = () => {
    return groceryItems.map((item, index) => (
      <li key={item.name}>
        <div className="container">
          <input
            type="checkbox"
            onChange={(e) => {
              handleUpdateCompleteStatus(e.target.checked, index);
            }}
            value={item.completed}
            checked={item.completed}
          />
          <p>
            {item.name}{" "}
            {item.quantity > 1 ? <span>X{item.quantity}</span> : null}
          </p>
        </div>
        <div>
          <button
            className="remove-button"
            onClick={() => handleRemoveItem(item.name)}
          >
            X
          </button>
        </div>
      </li>
    ));
  };

  return (
    <main className="App">
      <div>
        <div>
          {isCompleted && <h4 className="success">You are done</h4>}
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
