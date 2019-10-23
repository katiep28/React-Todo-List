import React from 'react';
import ListItem from "./ListItem";
import CompletedTasks from "./CompletedTasks";
import DeletedTasks from "./DeletedTasks";
import AddItem from "./AddItem";
import ItemCount from "./ItemCount";
import './App.css';
import uuid from "uuid/v4";

class App extends React.Component {
  state = {
    tasks: [
      { text: "walk the cat", completed: true, date: "2019-10-16", id: uuid() },
      { text: "brush the fish", completed: false, date: "2019-10-12", id: uuid() },
      { text: "hoover the grass", completed: false, date: "2019-10-13", id: uuid() },
      { text: "cut the carpet", completed: true, date: "2019-10-15", id: uuid() },
      { text: "eat the food", completed: true, date: "2019-10-15", id: uuid() },
      { text: "learn HTML", completed: true, date: "2019-10-17", id: uuid() }
    ],
    completedTasks: [
      { text: "Drink wine", completed: true, date: "2019-10-16", id: uuid() },
      { text: "Eat food", completed: false, date: "2019-10-12", id: uuid() }
    ],
    deletedTasks: [
      { text: "Climb Everest", completed: true, date: "2019-10-16", id: uuid() },
      { text: "Eat an Elephant", completed: false, date: "2019-10-12", id: uuid() }
    ]
  }
  //function to update the taskss with the tasks
  addTask = (taskText) => {
    //Create a new task wtih default complete and date properties
    const newTask = {
      text: taskText,
      completed: false,
      date: "2019-10-21",
      id: uuid()
    };
    //Make a copy of the tasks array
    //never do this.stat.tasks.push item and access it direactly as this causese
    //a problem
    const tasksCopy = this.state.tasks.slice();
    tasksCopy.push(newTask);
    this.setState({
      tasks: tasksCopy
    });
  }
  //Add that task to the state

  //Every component must have a render method
  render() {
    return (
      <div className="container">
        <div className="row paddingbelow">
          <div className="col-12">
            <h2>{new Date().toDateString()}</h2>
            <h1> Lists Lists Lists (L3)</h1>
            <h3> What do you need to do?</h3>
            <AddItem addTaskFunc={this.addTask} />
          </div>
        </div>
        <div className="row">
          <div className="col-9 col-lg-9">
            <ItemCount count={this.state.tasks.length} />
          </div>
          <div className="col-3 col-lg-3">
              <h4> Completed Tasks</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-9 col-lg-9" >
            <ol>
              {this.state.tasks.map(item => {
                return <ListItem key={item.id}
                  text={item.text}
                  completed={item.complete}
                  date={item.date} />
              })}
            </ol>
          </div>
          <div className="col-12 col-lg-3" >

            <ol>
              {this.state.completedTasks.map(item => {
                return <CompletedTasks
                  text={item.text}
                  date={item.date} />
              })}
            </ol>
            <div className="row justify-content-center">
              <h4> Deleted Tasks</h4>
          </div>
            <ol>
                  {this.state.deletedTasks.map(item => {
                return <DeletedTasks
                         text={item.text}
                         date={item.date} />
               })}
            </ol>
          </div>
        </div>
      </div>
    )
  }
}
export default App;
