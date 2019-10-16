import React from "react";
import "./AddItem.css";

class AddItem extends React.Component {
  render() {
      return (
         <div>
           <input id="addItemInput" type="text"/>
           <button id="addButton">Add</button>
         </div>
      );
  }
}

export default AddItem;