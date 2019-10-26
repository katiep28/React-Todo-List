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
      { text: "walk the cat", status: "D", date: "2019-10-16", id: uuid() },
      { text: "brush the fish", status: "C", date: "2019-10-12", id: uuid() },
      { text: "hoover the grass", status: "N", date: "2019-10-13", id: uuid() },
      { text: "cut the carpet", status: "N", date: "2019-10-15", id: uuid() },
      { text: "eat the food", status: "C", date: "2019-10-15", id: uuid() },
      { text: "learn HTML", status: "N", date: "2019-10-17", id: uuid() },
      { text: "Drink wine", status: "C", date: "2019-10-16", id: uuid() },
      { text: "Eat food", status: "C", date: "2019-10-12", id: uuid() },
      { text: "Climb Everest", status: "N", date: "2019-10-16", id: uuid() },
      { text: "Eat an Elephant", status: "D", date: "2019-10-12", id: uuid() }
    ]
  }

  //function to update the tasks with the 
  //Add that task to the stat
  addTask = (taskText) => {
    //Create a new task wtih default status and date properties
    const newTask = {
      text: taskText,
      status: "N",
      date: "2019-10-21",
      id: uuid()
    };
    const tasksCopy = this.state.tasks.slice();
    //Make a copy of the tasks array
    //never do this.stat.tasks.push item and access it direactly as this causese
    //a problem

    tasksCopy.push(newTask);
    this.setState({
      tasks: tasksCopy
    });
  }

  updateTask = (id, newStatus) => {

    const tasksUpdated =
      this.state.tasks.map(item => {
        if (item.id === id) {
          item.status = newStatus
        }
        return item;
      })
    this.setState({
      tasks: tasksUpdated
    });
    // this.state.tasks.map(item =>
    // alert(item.text + "   " + item.status));
  }

  //Every component must have a render method
  render() {
    const newTasks = this.state.tasks.filter(item => item.status === "N")
    const completedTasks = this.state.tasks.filter(item => item.status === "C")
    const deletedTasks = this.state.tasks.filter(item => item.status === "D")

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
            <h3>
              <i className="fa fa-trash iconbin"></i>
              {newTasks.length} Things To Do
              <i class="fa fa-check icontick"></i>
            </h3>
            {/* <ItemCount count={newTasks.length} /> */}
          </div>
          <div className="col-3 col-lg-3">
            <h4> Completed Tasks</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-9 col-lg-9" >
            <ol>
              {newTasks.map(item => {
                return <ListItem
                  updateTaskFunc={this.updateTask}
                  text={item.text}
                  status={item.status}
                  date={item.date}
                  id={item.id}
                  key={item.id}
                />
              })}
            </ol>
          </div>
          <div className="col-12 col-lg-3" >
            <ol>
              {completedTasks.map(item => {
                return <CompletedTasks
                  text={item.text}
                  status={item.status}
                  date={item.date}
                  id={item.id}
                  key={item.id} />
              })}
            </ol>
            <div className="row justify-content-center">
              <h4> Deleted Tasks</h4>
            </div>
            <ol>
              {deletedTasks.map(item => {
                return <DeletedTasks
                  text={item.text}
                  status={item.status}
                  date={item.date}
                  key={item.id} />
              })}
            </ol>
          </div>
        </div>
      </div>
    )
  }
}
export default App;
