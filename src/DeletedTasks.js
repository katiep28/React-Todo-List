import React from "react";
import "./DeletedTasks.css";

class DeletedTasks extends React.Component {
  render() {
    return (
         <div className="row">
          <div className="col-12 col-red col-lg-12">
            <li>
               {this.props.text}
            </li>
          </div>
         </div>
    );
  };
};
export default DeletedTasks;