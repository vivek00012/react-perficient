import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [toDoList, setList] = useState([]);
  const [inputValue, setValue] = useState('');

  const setInputValue = (e) => {
    setValue(e.target.value);
  };
  const addToDo = () => {
    setList((previousState) => {
      return [...previousState, ...[inputValue]];
    });

    setValue(() => '');
  };

  const removeToDo = (value) => {
    console.log(value);
    setList((previousState) => {
      return previousState.filter((val,index) => index !=value);
    });
  };

  return (
    <div>
      <ul>
        {toDoList?.map((list, index) => {
          return (
            <div key={index}>
              <li>{list}</li>
              <button onClick={() => removeToDo(index)}>Remove</button>
            </div>
          );
        })}
      </ul>
      <div>
        <input type="text" value={inputValue} onChange={setInputValue} /> &nbsp;
        <button onClick={addToDo}>Add</button>
        &nbsp;
      </div>
    </div>
  );
}
