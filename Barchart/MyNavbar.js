import React from "react";
import { Navbar, Nav } from "react-bootstrap";

function Mynavbar() {
  return (
    <>
      <div className="navibar">
        <Navbar bg="light" expand="lg">
          <Nav>
            <Nav.Link className="link">Overview</Nav.Link>
            <Nav.Link className="link">Orders</Nav.Link>
            <Nav.Link className="link">Payments</Nav.Link>
            <Nav.Link className="link">Banking</Nav.Link>
            <Nav.Link className="link">Settings</Nav.Link>
          </Nav>
        </Navbar>
      </div>
    </>
  );
}
export default Mynavbar;
