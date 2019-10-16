import React from 'react';
import ToDoList from "./ToDoList";
import CompletedTasks from "./CompletedTasks"
import DeletedTasks from "./DeletedTasks";
import './App.css';

class App extends React.Component {
  //Every component must have a render method
  render() {
    return (
      <div>
        <h1> Lists Lists Lists (L3)</h1>
        <h3> Things I need to do.</h3>
        {/* to short cut a tag of there is nothing in */}

        <ToDoList></ToDoList>
        <CompletedTasks></CompletedTasks>
    
        <DeletedTasks></DeletedTasks>
      </div>
      )
        }
      }
export default App;
