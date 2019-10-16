import React from "react";
import "./CompletedTasks.css";

class CompletedTasks extends React.Component {
  render() {
    return (

        <div className="Container">
           {/* <div className="row justify-content-end"> */}
          <div className="row justify-content-end">
          <div className="col-12 col-sm-4 col-yell">
          
      <div>
            <h1>Completed Items</h1>
            <ol>
              <li>Ate Lunch</li>
              <li>Drank Wine</li>
            </ol>
        </div>
      </div> 
    </div>      
  </div>
   
    );
  };
};
export default CompletedTasks;