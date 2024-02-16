import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./design.css";
import graph from "./graph.jpeg";
import MyNavbar from "./MyNavbar";
import Profile from "./profile.jpg";
import { Dropdown } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

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
            <div className="grid-container">
              <div className="grid-item item1">
                <b>
                  <b className="bi bi-chevron-left arrow1"></b>
                </b>
                <b>
                  <b className="bi bi-chevron-right arrow2"></b>
                </b>
              </div>
              <div className="grid-item item2">
                <b className="bi bi-search searchicon"></b>
                <input
                  type="search"
                  className="search"
                  placeholder="Searches for skills, peers and organisations"
                ></input>
              </div>
              <div className="grid-item item3">
                <b>
                  <i className="bi bi-envelope enve"></i>
                  <i className="bi bi-bell bel"></i>
                  <img
                    src={Profile}
                    className="pic"
                    alt="profilepic"
                    width="32px"
                    height="32px"
                  ></img>
                </b>
              </div>
            </div>
            <MyNavbar />

            <div className="container-fluid">
              <div className="row">
                <div className="col-md-8">
                  <h1 className="h3 headingg" style={{ marginLeft: "30px" }}>
                    Revenue
                  </h1>
                </div>
                <div className="col-md-2">
                  <Dropdown bg="secondary">
                    <Dropdown.Toggle className="toggle1">
                      Courses
                    </Dropdown.Toggle>
                  </Dropdown>
                </div>
                <div className="col-md-1">
                  <Dropdown bg="secondary">
                    <Dropdown.Toggle className="toggle">
                      this week
                    </Dropdown.Toggle>
                  </Dropdown>
                </div>
              </div>
              <div className="row rev">
                <div className="col-md-3">
                  <h2 className="h2">
                    <i className="bi bi-currency-rupee"></i>32,000
                  </h2>
                  <span className="span1">Earnings this week</span>
                </div>
                <div className="col-md-3">
                  <h2 className="h2">
                    <b>
                      <i className="bi bi-arrow-up-short garrow"></i>
                    </b>
                    4%
                  </h2>
                  <span className="span1">Previous week</span>
                </div>
                <div className="col-md-6">
                  <h2>Course offer this week</h2>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <h5 className="title">Top Selling Courses</h5>
                    <div className="table-responsive w-100 tab">
                      <table className="table table-border">
                        <tbody>
                          <tr>
                            <td className="td">1.</td>
                            <td className="td2">Beginner PHP Course</td>
                            <td className="td1">
                              <i className="bi bi-currency-rupee"></i>14,000
                            </td>
                          </tr>
                          <tr>
                            <td className="td">2.</td>
                            <td className="td2">
                              PHP Workshop with Anna University
                            </td>
                            <td className="td1">
                              <i className="bi bi-currency-rupee"></i>10,000
                            </td>
                          </tr>
                          <tr>
                            <td className="td">3.</td>
                            <td className="td2">Advanced PHP Course</td>
                            <td className="td1">
                              {" "}
                              <i className="bi bi-currency-rupee"></i>8,000
                            </td>
                          </tr>
                          <tr>
                            <td className="td">4.</td>
                            <td className="td2">Advanced PHP Course</td>
                            <td className="td1">
                              {" "}
                              <i className="bi bi-currency-rupee"></i>8,000
                            </td>
                          </tr>
                          <tr>
                            <td className="td">5.</td>
                            <td className="td2">Advanced PHP Course</td>
                            <td className="td1">
                              {" "}
                              <i className="bi bi-currency-rupee"></i>8,000
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <img src={graph} height="300px" width="96%" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-9">
                  <p className="h5">Recent Transactions</p>
                </div>
                <div className="col-md-3 violet">
                  <b>Show all transactions</b>
                </div>
              </div>
              <div className="row">
                <div className="table-responsive tabRad">
                  <table
                    className="table table-striped tab1"
                    style={{ borderRadius: "15px" }}
                  >
                    <thead id="thead-custom">
                      <tr>
                        <td style={{ backgroundColor: "#fbd2fb" }}></td>
                        <td style={{ backgroundColor: "#fbd2fb" }}>
                          <b>Received from</b>
                        </td>
                        <td style={{ backgroundColor: "#fbd2fb" }}>
                          <b>paid for</b>
                        </td>
                        <td style={{ backgroundColor: "#fbd2fb" }}>
                          <b>Through</b>
                        </td>
                        <td style={{ backgroundColor: "#fbd2fb" }}>
                          <b>Amount</b>
                        </td>
                        <td style={{ backgroundColor: "#fbd2fb" }}></td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <input type="checkbox"></input>
                        </td>
                        <td>
                          <b>
                            <i
                              class="bi bi-shield-check symbol"
                              style={{ fontSize: "16px", textAlign: "center" }}
                            ></i>
                            Siddharth.R
                          </b>
                          <br />
                          <span className="span">June 10,2021 at 10.00 am</span>
                        </td>
                        <td>
                          <b> Festival of UX/UI Design</b>
                          <br />
                          <span className="span">Term fees </span>
                        </td>
                        <td>Cash</td>
                        <td>
                          <span className="green">
                            <b>$12,345.00+</b>
                          </span>
                        </td>
                        <td>
                          <i class="bi bi-three-dots"></i>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input type="checkbox"></input>
                        </td>
                        <td>
                          <i
                            class="bi bi-stars symbol"
                            style={{ fontSize: "16px", textAlign: "center" }}
                          ></i>
                          <b>Siddharth.R</b>
                          <br />
                          <span className="span">June 10,2021 at 10.00 am</span>
                        </td>
                        <td>
                          <b> Festival of UX/UI Design</b>
                          <br />
                          <span className="span">Term fees</span>
                        </td>
                        <td>Online</td>
                        <td>
                          <span className="green">
                            <b>$12,345.00+</b>
                          </span>
                        </td>
                        <td>
                          <i class="bi bi-three-dots"></i>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input type="checkbox"></input>
                        </td>
                        <td>
                          <i
                            class="bi bi-currency-rupee symbol"
                            style={{ fontSize: "16px", textAlign: "center" }}
                          ></i>
                          <b>Siddharth.R </b>
                          <mark>Refund</mark>

                          <br />
                          <span className="span">June 10,2021 at 10.00 am</span>
                        </td>
                        <td>
                          <b> Festival of UX/UI Design</b>
                          <br />
                          <span className="span">Term fees </span>
                        </td>
                        <td>Online</td>
                        <td>
                          <span className="red">
                            <b>$12,345.00+</b>
                          </span>
                        </td>
                        <td>
                          <i class="bi bi-three-dots"></i>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Sidebar;
