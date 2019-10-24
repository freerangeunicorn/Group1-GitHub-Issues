import React from 'react'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'

export default function NavBar () {
  return (
    <Navbar bg='dark' variant='dark'>
      <Navbar.Brand href='#home'>Navbar</Navbar.Brand>
      <Nav className='mr-auto'>
        <Nav.Link href='#home'>Created</Nav.Link>
        <Nav.Link href='#features'>Assigned </Nav.Link>
        <Nav.Link href='#pricing'>Mentioned</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl
          type='text'
          placeholder='e.g. Facebook/React'
          className='mr-sm-2'
        />
        <Button variant='outline-info'>Search</Button>
      </Form>
    </Navbar>
  )
}
