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
        <div className="col-1 col-lg-1 align=left">
           <i className="fa fa-trash fa-1x" onClick={this.handleDeleteTick}/> 
        </div>
        <div className="col-6  col-lg-7 col-blue">
          <div>
            <li>
              {this.props.text}   
            </li>
          </div>
        </div>
        <div className="col-4 col-lg-3 col-blue">
          <div align="right">
              {this.props.date}   
              
          </div>
        </div>
        <div className="col-1 col-lg-1 justify-right">
          <i className="fa fa-check" onClick={this.handleCompleteTick}/>
        </div>
      </div>
    );
  }
}
export default ListItem;