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
      
       
        <div className="container">
          <div className="row">
            <div clssName="col-6">
              <h3> To Do </h3>
            </div>
          </div>

          <ol>
            <ToDoList text="Take the cat for a walk" />
            <ToDoList text="Hoover the grass" />
            <ToDoList text="Cut the carpet" />
            <ToDoList text="Mop the beds" />
            <ToDoList text="Polish the dog" />
          </ol>
        </div>
        
        <CompletedTasks></CompletedTasks>

        <DeletedTasks></DeletedTasks>
  
    </div>
    )
  }
}
export default App;
