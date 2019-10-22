import React from "react";
import "./CompletedTasks.css";

class CompletedTasks extends React.Component {
  render() {
    return (
        <div className="row paddrow">
          <div className="col-12 col-yell col-lg-12">
            <h4>Completed Items</h4>
            <ol>
              <li>Ate Lunch</li>
              <li>Drank Wine</li>
            </ol>
          </div>
        </div>
    );
  };
};
export default CompletedTasks;