import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

export default function NavBar(props) {
  const handleOwnerRepoSearch = e => {
    let owner = e.target.value.split("/")[0];
    let repo = e.target.value.split("/")[1];
    props.setOwner(owner)
    props.setRepo(repo)
  }
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
      >
        <FormControl
          type="text"
          placeholder="e.g. Facebook/React"
          className="mr-sm-2"
          onChange={e => handleOwnerRepoSearch(e)}
         
        />
        <Button
          
          type="button"
          variant="outline-info"
          onClick={() => {
            props.getRepoIssues();
            props.getRepoInfo();
            
          }}

        >
          Search
        </Button>
      </Form>
    </Navbar>
  );
}


// const handleSearchInput = e => {
//   // if(e.keyCode === 13) return props.getGithubIssuesData(); props.getGithubRepo()
//   let repoOwner = e.target.value.split("/")[0];
//   let repoName = e.target.value.split("/")[1];
//   props.setRepoOwner(repoOwner);
//   props.setRepoName(repoName);
// };
