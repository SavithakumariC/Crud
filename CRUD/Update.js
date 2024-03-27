import React, { useEffect, useState } from "react";
import { Form, Checkbox, Button } from "semantic-ui-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Update() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [check, setCheck] = useState(false);
  const [id, setId] = useState("");
  const navi = useNavigate();

  const upUser = async () => {
    await axios.put(`https://65b5460d41db5efd2867887b.mockapi.io/user/${id}`, {
      fname,
      lname,
      check,
    });
    navi("/read");
  };

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setFname(localStorage.getItem("fname"));
    setLname(localStorage.getItem("lname"));
    setCheck(localStorage.getItem("check"));
  }, []);

  return (
    <div>
      <Form className="form">
        <h4>Update in CRUD</h4>

        <Form.Field>
          <label>First name</label>
          <input
            type="text"
            name="fname"
            value={fname}
            onChange={(e) => setFname(e.target.value)}
          ></input>
        </Form.Field>
        <br />
        <Form.Field>
          <label>Last name</label>
             <input
            type="text"
            name="lname"
            value={lname}
            onChange={(e) => setLname(e.target.value)}
          ></input>
        </Form.Field>
        <br />
        <Form.Field>
          <Checkbox
            label="Agree to terms and policy"
            checked={check}
            onChange={() => setCheck(!check)}
          ></Checkbox>
        </Form.Field>
        <br />
        <Button onClick={upUser}>update</Button>
      </Form>
    </div>
  );
}
export default Update;
