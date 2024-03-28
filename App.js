import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Create from "./CRUD/Create";
import Read from "./CRUD/Read";
import Update from "./CRUD/Update";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="flex-container">
          <div className="flex-item">
            <h2 className="h2">Crud Application</h2>
          </div>
          <div className="flex-item">
            <p>
              Using React Hooks concepts and Integrating third party api
              (mockapi.io)
            </p>
          </div>
        </div>
      </div>
      <br />
      <BrowserRouter>
        <Routes>
          <Route path="/create" element={<Create />}></Route>
          <Route path="/read" element={<Read />}></Route>
          <Route path="/update" element={<Update />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
