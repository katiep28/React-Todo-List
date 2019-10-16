import React from "react";
import "./DeletedTasks.css";

class DeletedTasks extends React.Component {
  render() {
    return (
      <div className="Container">
         <div className="row justify-content-end">
          <div className="col-6 col-sm-4 col-red">
            <h1>Deleted Items</h1>
            <ol>
              <li>Bought Cat Food</li>
              <li>Bought Dog Food</li>
            </ol>
          </div>
         </div>
      </div> 
    );
  };
};
export default DeletedTasks;