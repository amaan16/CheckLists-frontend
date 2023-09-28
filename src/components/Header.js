import React,{useState} from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import ListSettings from "./ListSettings";

const Header = ({ data }) => {
  const [isSettingsOpen, setSettings] = useState(false);
  const typesOfLists = [
    "Daily",
    "Monthly",
    "Quaterly",
    "Half-Yearly",
    "Yearly",
    "Custom",
  ];

  const openSettings = () => {
    console.log("OpenSettings")
    setSettings(true);
  }

  const closeSettings = ()=> {
    setSettings(false);
  }

  return (
    <div className="header">
      {/* <h2>Todos' & Reminders</h2> */}
      <>
        {[false].map((expand) => (
          <Navbar
            key={expand}
            expand={expand}
            className="bg-body-tertiary mb-3"
          >
            <Container fluid className="bgColor">
              <div className="left-elements">
                <Navbar.Brand>CheckLists' & Reminders'</Navbar.Brand>
              </div>
              <div className="right-elements">
                <Link >
                  <i className="material-icons button-link" onClick={openSettings}>add</i>
                  
                </Link>
                <Link to="">
                  <i className="material-icons button-link">notifications</i>
                </Link>
                <Navbar.Toggle
                  aria-controls={`offcanvasNavbar-expand-${expand}`}
                />
              </div>
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    {data.userName}
                  </Offcanvas.Title>
                </Offcanvas.Header>
                {/* <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form> */}
                <Offcanvas.Body>
                  {data.todos.map((todo, index) => (
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                      <Nav.Link onClick={openSettings} >{todo.nameOfTodo}</Nav.Link>
                      <ListSettings isOpen={isSettingsOpen} onClose={closeSettings} />
                    </Nav>
                  ))}
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
        <ListSettings isOpen={isSettingsOpen} onClose={closeSettings} /> 
      </>
    </div>
  );
};

export default Header;
