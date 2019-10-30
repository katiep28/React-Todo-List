import React from "react";
import "./ListItem.css";

class ListItem extends React.Component {

  handleCompleteTick = () => {
    this.props.updateTaskFunc(this.props.id, "C");
  }
  handleDeleteTick = () => {
    this.props.updateTaskFunc(this.props.id, "D");
  }

  render()
   { 
    return (
      <div className="row padditemrow">
        <div className="col-1">
          {/* Delte functionality check box  */}
          <input className="form-check-input paddleft"
            type="checkbox"
            id="defaultCheck5"
            value="option1"
            onClick={this.handleDeleteTick} />
        </div>
        <div className="col-8  col-blue">
          <div>
            <li>
              {this.props.text}   
            </li>
          </div>
        </div>
        <div className="col-2 col-blue">
          <div>
              {this.props.date}     
          </div>
        </div>
        <div className="col-1 justify-right">
          {/* <i class="fa fa-check-input"></i>  */}
          {/* Complete Functionality */}
          <input className="form-check-input paddleft"
            type="checkbox"
            id="defaultCheck5"
            value="option1"
            onClick={this.handleCompleteTick}/>
        </div>
      </div>
    );
  }
}
export default ListItem;