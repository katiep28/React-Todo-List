import React from 'react';
import ListItem from "./ListItem";
import CompletedTasks from "./CompletedTasks";
import DeletedTasks from "./DeletedTasks";
import AddItem from "./AddItem";
import './App.css';
import uuid from "uuid/v4";

class App extends React.Component {
  state = {
    tasks: [
      { text: "Walk the cat", status: "D", date: "2019-10-16", id: uuid() },
      { text: "Brush the fish", status: "C", date: "2019-10-12", id: uuid() },
      { text: "Hoover the grass", status: "N", date: "2019-10-15", id: uuid() },
      { text: "Cut the carpet", status: "N", date: "2019-10-13", id: uuid() },
      { text: "Smell the roses", status: "C", date: "2019-10-15", id: uuid() },
      { text: "Learn HTML", status: "N", date: "2019-10-17", id: uuid() },
      { text: "Drink wine", status: "C", date: "2019-10-16", id: uuid() },
      { text: "Eat food", status: "C", date: "2019-10-12", id: uuid() },
      { text: "Climb Everest", status: "N", date: "2019-10-16", id: uuid() },
      { text: "Eat an Elephant", status: "D", date: "2019-10-12", id: uuid() }
    ],
    removeTaskArray: []
  }

  //function to update the tasks with the 
  //Add that task to the state
  addTask = (taskText) => {

    // Set the date for the New task 
    let moment = require('moment')
    let myDate = moment().format('YYYY-MM-DD')

    //Create a new task wtih default status
    const newTask = {
      text: taskText,
      status: "N",
      date: myDate,
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
    const tasksUpdated = this.state.tasks.map(item => {

        if (item.id === id) {
          item.status = newStatus
        }
        return item;
      })

    this.setState({
      tasks: tasksUpdated
    });
  }

  itemsToRemove = (id) => {
    const removeIds = this.state.removeTaskArray.slice();
    removeIds.push(id);

    this.setState({
      removeTaskArray: removeIds
    });
  }

  handleRemove = () => {
    //alert("Are you sure?");
    if (window.confirm("Are you sure you want to permenantly remove these item?")) {
      //I found the easiest way to remove the items was to update the sata and use
      // .filter
      this.state.removeTaskArray.map(id => {
        return this.updateTask(id, "R");
      })

      let tempArray = this.state.tasks.filter(item => item.status !== "R");

      this.setState({
        tasks: tempArray
      });
    }
    else {
      // Need to untick check box if the user has cancelled
      // let check = document.getElementById("defaultCheck5").checked = false

      let check=document.getElementsByTagName('input');

      for(let i=0;i<check.length;i++){
         if(check[i].type === "checkbox"){
        check[i].checked=false;
       }
      }
    }
    // Last step we need to clear the array of items to be removed      

    this.setState({
      removeTaskArray: []
    });
  }
  //Every component must have a render method
  render() {
    //Sort the data in date order
    let sorted = this.state.tasks.sort(function (a, b) {
      if (a.date < b.date) {
        return -1;
      }
      if (a.date > b.date) {
        return 1;
      }
      // dates must be equal
      return 0;
    });

    const newTasks = sorted.filter(item => item.status === "N")
    const completedTasks = this.state.tasks.filter(item => item.status === "C")
    const deletedTasks = this.state.tasks.filter(item => item.status === "D")

    return (
      <div className="container">
        <div className="row paddingbelow">
          <div className="col-12">
            <h2>{new Date().toDateString()}</h2>
            <h1> Lists Lists Lists</h1>
            <h3> What do you need to do?</h3>
            <AddItem addTaskFunc={this.addTask} />
          </div>
        </div>
        <div className="row">
          <div className="col-9 col-lg-9">
            <h3>
              {newTasks.length} Things To Do
            </h3>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-lg-8" >
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
          <div className="col-12 col-lg-4" >
             <div className="row justify-content-center">
                <h4> Completed Tasks</h4>
             </div>
            <ol>
              {completedTasks.map(item => {
                return <CompletedTasks
                  itemsToRemoveFunc={this.itemsToRemove}
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
                  itemsToRemoveFunc={this.itemsToRemove}
                  text={item.text}
                  status={item.status}
                  date={item.date}
                  id={item.id}
                  key={item.id} />
              })}
            </ol>
            <div className="row justify-content-center">
              <h4>Select Items to Remove</h4>
            </div>
            <div className="row justify-content-center">
              <button type="button"
                className="btn btn-warning"
                onClick={this.handleRemove}>
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default App;
