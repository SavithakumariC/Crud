import React from "react";
import { Dropdown } from "react-bootstrap";

function Headings() {
  return (
    <div className="row">
      <div className="col-md-8">
        <h1 className="h3 headingg" style={{ marginLeft: "30px" }}>
          Revenue
        </h1>
      </div>
      <div className="col-md-2">
        <Dropdown bg="secondary">
          <Dropdown.Toggle className="toggle1">Courses</Dropdown.Toggle>
        </Dropdown>
      </div>
      <div className="col-md-1">
        <Dropdown bg="secondary">
          <Dropdown.Toggle className="toggle">this week</Dropdown.Toggle>
        </Dropdown>
      </div>
    </div>
  );
}
export default Headings;
