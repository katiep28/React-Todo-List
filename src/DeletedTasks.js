import React from "react";
import "./DeletedTasks.css";

class DeletedTasks extends React.Component {

  handleTick = () => {
    
    this.props.itemsToRemoveFunc(this.props.id);
   }
  
   render() 
  
  {
   
    return (
      <div className="row">
        <div className="col-10 col-red col-lg-10">
          <li>
            {this.props.text}
          </li>
        </div>

        <div className="col-2 col-lg-2">
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
export default DeletedTasks;