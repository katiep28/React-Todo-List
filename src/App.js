import React from 'react';
import ToDoList from "./ToDoList";
import CompletedTasks from "./CompletedTasks"
import DeletedTasks from "./DeletedTasks";
import AddItem from "./AddItem";
import ItemCount from "./ItemCount";
import './App.css';

class App extends React.Component {
  //Every component must have a render method
  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div clssName="col-12 ">
            <h2>{new Date().toDateString()}</h2>
            <h1> Lists Lists Lists (L3)</h1>
            <h3> What do you need to do?</h3>
            <AddItem />
          </div>
        </div>
        <div className="row justify-content-between">
          <div clssName="col-9" >
            <ItemCount count={5} />
              <ol>
                <ToDoList text="Take the cat for a walk" />
                <ToDoList text="Hoover the grass" />
                <ToDoList text="Cut the carpet" />
                <ToDoList text="Mop the beds" />
                <ToDoList text="Polish the dog" />
              </ol>
          </div>
          <div clssName="col-2" >
               <h3> how do i make this invisible</h3>
              <CompletedTasks />
              <DeletedTasks />  
          </div>
        </div>
      </div>
    )
  }
}
export default App;
