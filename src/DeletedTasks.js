import React from "react";
import "./DeletedTasks.css";

class DeletedTasks extends React.Component {
  render() {
    return (
      <div className="Container">
         <div className="row justify-content-end">
          <div className="col-4 col-red">
            <h4>Deleted Items</h4>
            <ol>
              <li>Buy Cat Food</li>
              <li>Buy Dog Food</li>
            </ol>
          </div>
         </div>
      </div> 
    );
  };
};
export default DeletedTasks;