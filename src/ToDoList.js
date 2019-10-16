import React from "react";
import CompletedTasks from "./CompletedTasks";
import "./ToDoList.css";

class ToDoList extends React.Component {
  render() {
    return (

        <div className="row">
        <div className="col-3  col-blue">
          <div class="text-white">
            {this.props.text}
          </div>
        </div>
        <div className="col-1">
          <button className="btn btn-success">Complete</button>
        </div>
        <div className="col-1">
          <button className="btn btn-danger"> Delete</button>
        </div>
      </div>
      


    );
  }
}
export default ToDoList;