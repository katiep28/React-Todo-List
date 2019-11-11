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
        <div className="col-1 col-lg-1">
          <i className="fa fa-trash" onClick={this.handleDeleteTick}/>
        </div>
        <div className="col-7  col-lg-7 col-blue">
          <div>
            <li>
              {this.props.text}   
            </li>
          </div>
        </div>
        <div className="col-3 col-lg-3 col-blue">
          <div>
              {this.props.date}     
          </div>
        </div>
        <div className="col-1 jcol-lg-1 justify-right">
          <i className="fa fa-check" onClick={this.handleCompleteTick}/>
        </div>
      </div>
    );
  }
}
export default ListItem;