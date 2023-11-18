import React from 'react';
import './App.css';
import Input from './Components/Input/Input';
import Button from './Components/Button/Button';
import List from './Components/List/List';
import { useState } from 'react';



function App() {

  const [taskslist, setTaskslist] = useState([]);
  const [inputValue, setInputValue] = useState('')

  const handleInput = (e) => {
    setInputValue(e.target.value)
  }

  const handleClick = () => {
    if (inputValue.trim() !== '') {
      const myTaskList = [...taskslist, inputValue.toUpperCase()]
      setTaskslist(myTaskList)
      localStorage.setItem('myTaskList', JSON.stringify(myTaskList))
      setInputValue('')
    }
  }

  const deleteItem = (item) => {
    const filteredList = taskslist.filter((element) => element !== item)
    setTaskslist(filteredList)
    localStorage.setItem('myTaskList', JSON.stringify(filteredList))

  }


  return (
    <div className='App'>
      <p>Rika To do list</p>
      <div className='button-input-container'>
        <Button label='Add' onClick={handleClick} />
        <Input type="text" placeholder="Add a task..." onInput={handleInput} value={inputValue} />
      </div>
      <List list={JSON.parse(localStorage.getItem('myTaskList'))} deleteItem={deleteItem} />
    </div>
  );
}


export default App;
