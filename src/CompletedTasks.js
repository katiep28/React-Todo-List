import React from "react";
import "./CompletedTasks.css";
import uuid from "uuid/v4";

class CompletedTasks extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-12 col-yell col-lg-12">
          {/* <h4>Completed Items</h4> */}
          <li>
            {this.props.text}
          </li>
        </div>
      </div>
    );
  };
};
export default CompletedTasks;

