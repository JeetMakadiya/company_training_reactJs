import './App.css';
import { useState } from 'react';

function App() {
  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };

  return (
    <>
      <div class="todolist">
        <h1>TODO LIST</h1>
        <br />
        <input type="text" value={inputList} placeholder="Add items" onChange={itemEvent} />
        <button onClick={listOfItems}>+</button>
        <ol>
          {
            Items.map((itemval) => {
              return <li>{itemval}</li>;
            })
          }
        </ol>
      </div>
    </>
  );
}

export default App;
