import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./design.css";
import MyNavbar from "./Mynavbar";
import "bootstrap-icons/font/bootstrap-icons.css";
import Content from "./Contents";
import Searchbar from "./SearchBar";
import Heading from "./Headings";
import Tableh from "./TableH";

function Sidebar() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div
            className="col-sm-1 bg-dark text-white"
            style={{ height: "143svh", color: "blue" }}
          >
            <div
              className="d-flex flex-column align-items-center  bgVionpm startlet"
              style={{ margin: 0, padding: 0 }}
            >
              <div className="fs-6 d-md-inline">
                <div className="mt-3 mb-2 topics homeDiv">
                  <i
                    class="bi bi-house"
                    style={{
                      fontSize: "25px",
                      textAlign: "center",
                    }}
                  ></i>
                  <br />
                  Home
                </div>
              </div>
            </div>
            <div className="d-flex flex-column align-items-center bgViolet">
              <div className="fs-6">
                <div className="mt-4 mb-4 topics">
                  <i
                    class="bi bi-shield-check"
                    style={{ fontSize: "25px", textAlign: "center" }}
                  ></i>
                  <br />
                  Courses
                </div>
              </div>
            </div>
            <div className="d-flex flex-column align-items-center bgViolet">
              <div className="fs-6">
                <div className="mt-4 mb-4 topics">
                  <i
                    class="bi bi-stars"
                    style={{ fontSize: "25px", textAlign: "center" }}
                  ></i>
                  <br />
                  Events
                </div>
              </div>
            </div>
            <div className="d-flex flex-column align-items-center bgViolet">
              <div className="fs-6">
                <div className="mt-4 mb-4 topics">
                  <i
                    class="bi bi-currency-rupee"
                    style={{ fontSize: "25px", textAlign: "center" }}
                  ></i>
                  <br />
                  Revenue
                </div>
              </div>
            </div>
            <div className="d-flex flex-column align-items-center bgViolet">
              <div className="fs-6">
                <div className="mt-4 mb-4 topics">
                  <i
                    class="bi bi-building"
                    style={{ fontSize: "25px", textAlign: "center" }}
                  ></i>
                  <br />
                  Institutions
                </div>
              </div>
            </div>
            <div className="d-flex flex-column align-items-center bgViolet align-items-sm-start-px-7">
              <div className="fs-6">
                <div className="mt-4 mb-4 topics">
                  <i
                    class="bi bi-graph-up"
                    style={{ fontSize: "25px", textAlign: "center" }}
                  ></i>
                  <br />
                  Analytics
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-11 divColor" style={{ margin: 0, padding: 0 }}>
            <Searchbar />
            <MyNavbar />

            <div className="container-fluid">
              <Heading />
              <TableH />
              <Content />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Sidebar;
