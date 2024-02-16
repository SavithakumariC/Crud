function Content() {
  return (
    <>
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
    </>
  );
}
export default Content;
