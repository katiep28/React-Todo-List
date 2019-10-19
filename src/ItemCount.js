import React from "react";

class ItemCount extends React.Component{
    render() {
        return (
          <h3>{this.props.count} Things To Do</h3>
        );
    }
}

export default ItemCount;