import React from 'react';
import ListItem from "./ListItem";
import CompletedTasks from "./CompletedTasks";
import DeletedTasks from "./DeletedTasks";
import AddItem from "./AddItem";
import './App.css';
import uuid from "uuid/v4";
import axios from "axios";

class App extends React.Component {
  state = {
    tasks: [],
    removeTaskArray: []
  }

  componentDidMount() {
    //Make async request to get data
    axios.get('https://9dcour1we6.execute-api.eu-west-2.amazonaws.com/dev/tasks')
      .then((response) => {
        // handle success
        this.setState({
          tasks: response.data.tasks
        })
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  };
  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    // if (this.props.userID !== prevProps.userID) {
    //   this.fetchData(this.props.userID);
    // }
    axios.get('https://9dcour1we6.execute-api.eu-west-2.amazonaws.com/dev/tasks')
      .then((response) => {
        // handle success
        this.setState({
          tasks: response.data.tasks
        })
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })

  };

  //function to update the tasks with the 
  //Add that task to the state
  addTask = (taskText, taskDate) => {

    // Set the date for the New task 
    // let moment = require('moment')
    // let myDate = moment().format('YYYY-MM-DD')

    //Create a new task wtih default status
    const newTask = {
      text: taskText,
      status: "N",
      date: taskDate,
      id: uuid
    };
    //Insert the new task into the database
    axios.post('https://9dcour1we6.execute-api.eu-west-2.amazonaws.com/dev/tasks', newTask)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

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

        // Update the status on the database  
        axios.put('https://9dcour1we6.execute-api.eu-west-2.amazonaws.com/dev/tasks/' + id + "/" + newStatus)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
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
      // this.state.removeTaskArray.map(id => {
      //   return this.updateTask(id, "R");
      // })

      // Delete the status on the database 

      this.state.removeTaskArray.forEach(id => {

        axios.delete('https://9dcour1we6.execute-api.eu-west-2.amazonaws.com/dev/tasks/' + id)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
      })
      // let tempArray = this.state.tasks.filter(item => item.status !== "R");
      let tempArray = this.state.tasks.filter(item => item.status !== "R");
      //  let tempArray = this.state.tasks.slice;
      this.setState({
        tasks: tempArray
      });
    }
    else {
      // Need to untick check box if the user has cancelled
      // let check = document.getElementById("defaultCheck5").checked = false

      let check = document.getElementsByTagName('input');

      for (let i = 0; i < check.length; i++) {
        if (check[i].type === "checkbox") {
          check[i].checked = false;
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
      <body>
      <div className="container">
        <br />
        <div className="row">
          <div className="col-12 col-lg-12 border border-secondary border-thick">
            {/* <img src="https://rappstarcom.files.wordpress.com/2012/09/c9b24-mylistim.gif?w=320&h=144" alt="" align="center"/> */}
            <h2 className="font-italic" align="center">Lists Lists Lists</h2>
            <div>
              <AddItem addTaskFunc={this.addTask} />
            </div>
          </div>
        </div>
        <br />
        <div className="row paddingabove ">
          <div className="col-1 col-lg-1">
            <p align="left">
              Del
            </p>
          </div>
          <div className="col-10 col-lg-6">
            <h4 align="center">
              {newTasks.length} Things To Do
            </h4>
          </div>
          <div className="col-1 col-lg-1">
            <p align="center">
              Done
            </p>
          </div>
        </div>
        <div className="row paddingbelow ">
          <div className="col-12 col-lg-8 border border-secondary border-thick" >
            <br/>
            <ol className="list-group">
              {newTasks.map(item => {
                return <ListItem
                  // updateTaskFunc={this.updateTask}
                  text={item.text}
                  status={item.status}
                  date={item.date.substring(0, 10)}
                  id={item.id}
                  key={item.id}
                />
              })}
            </ol>
          </div>
          <div className="col-12 col-lg-4 border border-secondary border-thick" >
            <div className="row justify-content-center paddingabove">
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
        <footer className="container-fluid">
          <p>Website created by Kr8P</p>
        </footer>
      </div>
      </body>
    )
  }
}
export default App;
