import React from "react";
import { Api_url } from "../Api";
import { Button } from "semantic-ui-react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Read() {
  const [apiData, setapiData] = useState([]);
  const delUser = (id) => {
    axios.delete(`https://65b5460d41db5efd2867887b.mockapi.io/user/${id}`);
    getData();
  };
  const navi = useNavigate();
  const updateUser = ({ fname, lname, check, id }) => {
    localStorage.setItem("id", id);
    localStorage.setItem("fname", fname);
    localStorage.setItem("lname", lname);
    localStorage.setItem("check", check);
    navi("/update");
  };

  const getData = async () => {
    const res = await axios.get(Api_url);
    setapiData(res.data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="container">
      <div className="flex-container">
        <div className="flex-item">
          <h5 className="h5">Read , Update and Delete in CRUD</h5>
        </div>
        <div className="flex-item1 ">
          <table celled className="table">
            <thead>
              <tr>
                <th class="t1">Name</th>
                <th class="t1">Lname</th>
                <th class="t1">Checkbox </th>
                <th class="t1">Delete</th>
                <th class="t1">Update</th>
              </tr>
            </thead>

            <tbody>
              {apiData.map((data) => {
                return (
                  <tr>
                    <td>{data.fname}</td>
                    <td>{data.lname}</td>
                    <td>{data.check ? "checked" : "Unchecked"}</td>
                    <td>
                      <Button onClick={() => delUser(data.id)}> Delete</Button>
                    </td>
                    <td>
                      <Button onClick={() => updateUser(data)}>Update</Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default Read;
