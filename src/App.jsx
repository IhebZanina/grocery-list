import "./App.css";
import groceryCart from "./assets/grocery-cart.png";
const App = () => {
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
            />
          </div>
        </div>
        <ul>
          <li>
            <div className="container">
              <input type="checkbox" />
              <p>Carrots</p>
            </div>
            <div>
              <button className="remove-button">X</button>
            </div>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default App;
