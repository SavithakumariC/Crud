import axios from "axios";
import React, { useState } from "react";
import { Api_url } from "../Api";
import { Form, Button, Checkbox } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
function Create() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [check, setCheck] = useState(false);
  const navi = useNavigate();
  const callAPI = async () => {
    await axios.post(Api_url, { fname, lname, check });
    navi("/read");
  };

  return (
    <Form className="form">
      <h4>Create in CRUD</h4>
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
      <Button onClick={callAPI} className="button">Submit</Button>
    </Form>
  );
}
export default Create;
