import React from "react";
import "./AddItem.css";

class AddItem extends React.Component {
  state = {
    newTaskText: "",
    newTaskDate: ""
  }
  updateTaskText = (event) => {
    this.setState({
      newTaskText: event.target.value
    })
  }
  updateTaskDate = (event) => {
    this.setState({
      newTaskDate: event.target.value
    })
  }

  handleClick = () => {
    // Set the date for the New task 
    let moment = require('moment')
    let today = moment().format('YYYY-MM-DD')
    if (this.state.newTaskText === "") {
      alert("ERROR: You must enter some text before pressing the ADD button");
    }
    if (this.state.newTaskDate === "") {
      alert("ERROR: You must enter a date before pressing the ADD button");
      return;
    }
    if (this.state.newTaskDate < today) {
      alert("ERROR: The date must not be earlier than today");
      return;
    }
    this.props.addTaskFunc(this.state.newTaskText, this.state.newTaskDate);
    this.setState({
      newTaskText: "",
      newTaskDate: ""
    });
  };
  render() {
    return (
      <section className= "add">
        <div className="row paddingabove paddingleftright">
          <div className="col-12 col-lg-3">
            <h5 align="left"> What do you need to do?</h5>
          </div>
          <div className="col-12 col-lg-9">
            <input
              id="addItemInput"
              type="text"
              className="form-control"
              placeholder="E.g. take out bins"
              value={this.state.newTaskText}
              onChange={this.updateTaskText} />
          </div>
        </div>
        <div className="row paddingleftright">
          <div className="col-12 col-lg-3">
            <h5 align="left"> When do you need it by?</h5>
          </div>
          <div className="col-12 col-lg-9">
            <input
              id="addDateInput"
              type="date"
              className="duedate"
              value={this.state.newTaskDate}
              onChange={this.updateTaskDate} />
          </div>
        </div>
        <div className="row paddingbelow">
          <div className="col-3 col-lg-3" />
          <div className="col-9 col-lg-9">
            <div>
              <button className="btn btn-warning"
                onClick={this.handleClick}>Add
              </button>
            </div>
          </div>
        </div>
      </section >
    );
  }
}

export default AddItem;