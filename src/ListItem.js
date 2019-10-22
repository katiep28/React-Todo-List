import React from "react";
import "./ListItem.css";

class ListItem extends React.Component {
  render() {
    return (
      <div className="row padditemrow">
        <div className="col-1">
          <i className="fa fa-trash"></i>
        </div>
        <div className="col-10  col-blue">
          <div>
            <li className={this.props.completed ? "completedItem" : ""}>
              {this.props.text}
            </li>
          </div>
        </div>
        <div className="col-1">
          <i className="fa fa-check-square paddiconright"></i>
        </div>
      </div>
    );
  }
}
export default ListItem;