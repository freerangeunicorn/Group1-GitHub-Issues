import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

export default function NavBar(props) {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Created</Nav.Link>
        <Nav.Link href="#features">Assigned </Nav.Link>
        <Nav.Link href="#pricing">Mentioned</Nav.Link>
      </Nav>

      {/* Get the keyword from user */}
      {/* use keyword for searching api */}
      <Form
        inline
        onSubmit={e => {
          props.handleSearch(e);
        }}
      >
        <FormControl
          type="text"
          placeholder="e.g. Facebook/React"
          className="mr-sm-2"
          onChange={e => props.setQuery(e.target.value)}
          value={props.query}
        />
        <Button type="submit" variant="outline-info">
          Search
        </Button>
      </Form>
    </Navbar>
  );
}
