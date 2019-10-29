import React from "react";
import "./AddItem.css";

class AddItem extends React.Component {
  state = {
    newTaskText:""
  }
  updateTaskText =(event) =>{
    this.setState({
      newTaskText: event.target.value
    })
  }

  handleClick =() =>{
    if (this.state.newTaskText === ""){
      alert("ERROR: You must enter some text before pressing the ADD button");
      return;
    }
    this.props.addTaskFunc(this.state.newTaskText);
    this.setState({
      newTaskText: ""
    })};
  

  render() {
      return (
        <section>
         <div align="center">
          <input
          id="addItemInput"
          type="text"
          className="form-control"
          placeholder="E.g. take out bins"
          value={this.state.newTaskText}
          onChange={this.updateTaskText}
        />
           <button className="btn btn-warning" onClick=
          {this.handleClick}>Add</button>
         </div>
         </section>
      );
  }
}

export default AddItem;