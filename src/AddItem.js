import React from "react";
import "./AddItem.css";

class AddItem extends React.Component {
  render() {
      return (
         <div align="center">
           <input id="addItemInput" type="text" size="large"/>
           <button className="btn btn-warning">Add</button>
         </div>
      );
  }
}

export default AddItem;