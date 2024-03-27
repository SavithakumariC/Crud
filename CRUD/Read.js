import React from "react";
import { Api_url } from "../Api";
import { Button, Table } from "semantic-ui-react";
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
    <div>
      <h4>Read and Delete in CRUD</h4>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell class="t1">Name</Table.HeaderCell>
            <Table.HeaderCell class="t1">Lname</Table.HeaderCell>
            <Table.HeaderCell class="t1">Checkbox </Table.HeaderCell>
            <Table.HeaderCell class="t1">Delete</Table.HeaderCell>
            <Table.HeaderCell class="t1">Update</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {apiData.map((data) => {
            return (
              <Table.Row>
                <Table.Cell>{data.fname}</Table.Cell>
                <Table.Cell>{data.lname}</Table.Cell>
                <Table.Cell>{data.check ? "checked" : "Unchecked"}</Table.Cell>
                <Table.Cell>
                  <Button onClick={() => delUser(data.id)}> Delete</Button>
                </Table.Cell>
                <Table.Cell>
                  <Button onClick={() => updateUser(data)}>Update</Button>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
}
export default Read;
