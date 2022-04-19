import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";

import CreateStudent from "./Components/crud/student/CreateStudent";
import EditStudent from "./Components/crud/student/EditStudent";
import ListStudent from "./Components/crud/student/ListStudent";
import CreateProfessor from "./Components/crud/professor/CreateProfessor";
import EditProfessor from "./Components/crud/professor/EditProfessor";
import ListProfessor from "./Components/crud/professor/ListProfessor";
//import "./App.css";

import Home from "./Web/Home";
import About from "./Web/About";
import Page1 from "./Web/Page1";
import Page2 from "./Web/Page2";

function App() {
  function studentDropdown() {
    return (
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdownMenuLink"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Estudante
        </a>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <li className="navitem">
            <Link to="/createStudent" className="nav-link">
              Criar Estudante
            </Link>
          </li>
          <li className="navitem">
            <Link to="/listStudent" className="nav-link">
              Listar Estudante
            </Link>
          </li>
        </ul>
      </li>
    );
  }
  function professorDropdown() {
    return (
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdownMenuLink"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Professor
        </a>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <li className="navitem">
            <Link to="/createProfessor" className="nav-link">
              Criar Professor
            </Link>
          </li>
          <li className="navitem">
            <Link to="/listProfessor" className="nav-link">
              Listar Professor
            </Link>
          </li>
        </ul>
      </li>
    );
  }

  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to={"/"} className="navbar-brand" style={{ paddingLeft: 10 }}>
          CRUD
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="navitem">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="navitem">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>

            {/* <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Dropdown Button
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown> */}

            {studentDropdown()}
            {professorDropdown()}
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="createstudent" element={<CreateStudent />} />
        <Route path="editStudent/:id" element={<EditStudent />} />
        <Route path="liststudent" element={<ListStudent />} />
        <Route path="createprofessor" element={<CreateProfessor />} />
        <Route path="listprofessor" element={<ListProfessor />} />
        <Route path="editprofessor/:id" element={<EditProfessor />} />
      </Routes>
    </div>
  );
}

export default App;
