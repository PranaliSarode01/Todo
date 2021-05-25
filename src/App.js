import React, { useState } from 'react';
import TodoList from  "./ToDoList";
const App = () => {

  const [inputList, setInputList] = useState("");
  const [Item, setItem] = useState ([]);
 
  const itemEvent = (event) => {
    setInputList(event.target.value)
  };  

  const listOfItem = () => {
    setItem ( (oldItems) => {
      return [...oldItems,inputList]
    });
  };
  const deleteItems = (id) => {

    setItem ((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      })
    })
  };
    
  return (
    <>
    <div className = 'main'>
    <div className = 'centre'>
      <br/>
      <h1>ToDo List.</h1>
      <br/>
      <input type='text' placeholder = 'Add a item' onChange={itemEvent} />
      <button onClick = {listOfItem}> + </button>
      <ol>
       {/* <li>{inputList}</li>*/}

       {Item.map((itemval, index) => {
        return <TodoList key = {index}
        id={index}
        text={itemval}
        onSelect={deleteItems}
        />;
         })}
      </ol>
        
    </div>
    </div>
    </>
  );
};


export default App;
