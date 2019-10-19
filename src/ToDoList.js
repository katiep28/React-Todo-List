import React from "react";
import CompletedTasks from "./CompletedTasks";
import "./ToDoList.css";

class ToDoList extends React.Component {
  render() {
    return (

      <div className="row">
        <div className="col-6  col-blue">
          <div>
            <li>{this.props.text}</li>
          </div>
        </div>
        <div className="col-3">
          <button className="btn btn-success">Complete</button>
        </div>
        <div className="col-3">
          <button className="btn btn-danger"> Delete</button>
        </div>
      </div>
    );
  }
}
export default ToDoList;