import React from "react";
import CompletedTasks from "./CompletedTasks";
import "./ToDoList.css";

class ToDoList extends React.Component {
  render() {
    return (
     <div className="container">
         <div className="row">
            <div className="col-6 col-sm-8 col-blue">
                <div class="text-white">
                    <h1>To Do</h1>
                    <h5>Priority               Comp</h5>
                    <ol>
                      <li>Take the cat for a walk</li>
                      <li>Hoover the grass </li>
                      <li>Cut the carpet</li>
                      <li> Mop the beds</li>
                      <li>Polish the dog</li>
                    </ol>
                </div>
            </div>
            
            {/* <CompletedTasks></CompletedTasks>     */}
              </div>
     </div>
      
    );
  }
}
export default ToDoList;