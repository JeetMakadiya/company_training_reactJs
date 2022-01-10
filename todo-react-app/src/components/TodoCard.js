import React, { useState, useEffect } from "react";
import "../styles/todo-card.css";

// todo header fun.
let TodoCardHeader = (props) => {
  return (
    <div className="todo-card-header">
      <div className="todo-date">
        <div className="date-num">{props.date}</div>
        <div className="month-year">
          <p className="month">{props.month}</p>
          <p className="year">{props.year}</p>
        </div>
      </div>
      <div className="todo-day">{props.day}</div>
    </div>
  );
};

//todo body fun.
let TodoCardBody = (props) => {
  return (
    <div className="todo-card-body">
      {props.children}
    </div>
  );
};

// Component Function
let TodoCard = (props) => {
  let [cDate, setCdate] = useState(new Date());

  setInterval(() => {
    let date = new Date();
    setCdate(date);
  }, 60000);
  let dateArray = cDate.toDateString().split(" ");

  const getLocalStorageItems = () => {
    let list = localStorage.getItem('todolists');
  
    if (list) {
      return JSON.parse(localStorage.getItem('todolists'));
    } else {
      return [];
    }
  }
  const [inputValue,setInputValue] = useState("");
  const [listItem,setListItem] = useState(getLocalStorageItems());
  let handleInputValue = (event) => {
    setInputValue(event.target.value);
  };

  let addItem = () => {
    if(inputValue != ""){
        setListItem((oldListItem) => {
            return [...oldListItem,inputValue];
        });
        setInputValue("");
        document.getElementById('errorDiv').innerText = "";
    }else{
        document.getElementById('errorDiv').innerText = "*Enter Something";
    }
  };

  //setting items to localStorage
  useEffect(() => {
    localStorage.setItem('todolists',JSON.stringify(listItem))}
    ,[listItem]);

  return (
    <div className="todo-card">
      <TodoCardHeader
        date={dateArray[2]}
        month={dateArray[1]}
        year={dateArray[3]}
        day={dateArray[0]}
      />
      <TodoCardBody>
        <ul className="todo-list">
        {
            listItem.map((itemVal,index) => {
                return(
                    <li key={index} className="todo-list-item">
                        <span>{itemVal}</span>
                        <div className="roundBtn"></div>
                    </li>
                );
            })
        }
        </ul>
      </TodoCardBody>
      <input type="text" name="inputListItem" value={inputValue} onChange={handleInputValue}/>
      <div className="errorMsg" id="errorDiv"></div>
      {/* todo plus button */}
      <div className="todo-plus-btn" onClick={addItem}>
        <span>+</span>
      </div>
    </div>
  );
};

export default TodoCard;
