import './App.css';
import { useEffect, useState } from 'react';

const getLocalItems = () => {
  let list = localStorage.getItem('lists');

  if (list) {
    return JSON.parse(localStorage.getItem('lists'));
  } else {
    return [];
  }
}

function App() {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState(getLocalItems());

  let time = new Date().toLocaleTimeString();
  let date = new Date().toDateString();
  const [cTime, setCtime] = useState(time);
  const [cDate, setCdate] = useState(date);
  setInterval(() => {
    time = new Date().toLocaleTimeString();
    date = new Date().toDateString();
    setCtime(time);
    setCdate(date);
  },1000);

  const inputTextEvent = (event) => {
    setInputValue(event.target.value);
  };

  const clickOnPlus = () => {
    document.getElementById('textInput').style.display = 'inline-block';
    document.getElementById('plusBtn').style.display = 'none';
  };

  const addItem = (event) => {
    if(event.keyCode === 13){
      event.preventDefault();

      if (inputValue != "") {
        setItems((oldItems) => {
          return [...oldItems, inputValue];
        });
        setInputValue("");
      }else{
        document.getElementById('errorMsg').innerText = "*Enter Something";
      }
    }
  };

  document.addEventListener('keydown', (event) => {
    if (event.keyCode == 27 ) {
      document.getElementById('textInput').style.display = 'none';
      document.getElementById('plusBtn').style.display = 'inline-block';
    }
  });

  useEffect(() => {
    localStorage.setItem('lists',JSON.stringify(items))}
    ,[items]);
  
  return (
    <>
      <div className="main">
        <div className='date-time-div'>{cDate+" "+cTime}</div>
        <div className='todolist-container'>
          <div className='todolist-main'>
            <h1>TODO LIST</h1>
            <button onClick={clickOnPlus} id="plusBtn">+</button>
            <ol>
            {
              items.map((itemval) => {
                return <li>{itemval}</li>;
              })
            }
            </ol>
            <input type="text" id="textInput" value={inputValue} placeholder="Add items" onChange={inputTextEvent} onKeyUp={addItem}/>
            <span className='errorMsg' id='errorMsg'></span>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
