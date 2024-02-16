import React from "react";
import graph from "./graph.jpeg";

function TableH() {
  return (
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
                  <td className="td2">PHP Workshop with Anna University</td>
                  <td className="td1">
                    <i className="bi bi-currency-rupee"></i>10,000
                  </td>
                </tr>
                <tr>
                  <td className="td">3.</td>
                  <td className="td2">Advanced PHP Course</td>
                  <td className="td1">
                    <i className="bi bi-currency-rupee"></i>8,000
                  </td>
                </tr>
                <tr>
                  <td className="td">4.</td>
                  <td className="td2">Advanced PHP Course</td>
                  <td className="td1">
                    <i className="bi bi-currency-rupee"></i>8,000
                  </td>
                </tr>
                <tr>
                  <td className="td">5.</td>
                  <td className="td2">Advanced PHP Course</td>
                  <td className="td1">
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
  );
}
export default TableH;
