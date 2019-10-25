import React from "react";
import "./ListItem.css";

class ListItem extends React.Component {

  state = {

  }

  handleTick = () => {
    this.props.updateTaskFunc(this.props.id, "C");
  }

  render() {
    return (
      <div className="row padditemrow">
        <div className="col-1">
          <i className="fa fa-trash"></i>
        </div>
        <div className="col-10  col-blue">
          <div>
            {/* <li className={this.props.completed ? "completedItem" : ""}> */}
            <li>
              {this.props.text}
            </li>
          </div>
        </div>
        <div className="col-1 justify-content-right">
          {/* <i class="fa fa-check"></i> */}
          {/* <button className="btn btn-warning" onClick=
          {this.handleTick}>Done</button> */}
          <input className="form-check-input"
            type="checkbox"
            id="defaultCheck1"
            onClick={this.handleTick} />
        </div>
      </div>

    );
  }
}
export default ListItem;