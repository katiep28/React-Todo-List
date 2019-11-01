import React from "react";
import "./CompletedTasks.css";
import uuid from "uuid/v4";

class CompletedTasks extends React.Component {
 // build up an array of item ids to be remove
  handleTick = () => {
  
   this.props.itemsToRemoveFunc(this.props.id)
  }

  render() {
    return (
      <div className="row">
        <div className="col-10 col-yell col-lg-10">
          {/* <h4>Completed Items</h4> */}
          <li>
            {this.props.text}
          </li>
        </div>
        <div className="col-2 col-lg-2justify-right">
        <input className="form-check-input paddleft"
            type="checkbox"
            id="defaultCheck5"
            value="option1"
            onClick={this.handleTick} />
        </div>
      </div>
    );
  };
};
export default CompletedTasks;

