import React from 'react'
import { Pagination, Row, Col, Nav, Card, Button } from 'react-bootstrap'

const Board = () => {
  return (
    <Pagination.Item>
      <Row>
        <Col>
          <Nav className='justify-content-end' activeKey='/home'>
            <Nav.Item>
              <Nav.Link href='/home'>Filter or Sort</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey='link-1'>Filter or Sort</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey='link-2'>Filter or Sort</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey='disabled' disabled>
                Disabled
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card className='text-center'>
            <Card.Header>Featured</Card.Header>
            <Card.Body>
              <Card.Title>
                <span
                  className='displayModal'
                  href='#'
                  onClick={console.log('modal should display on click')}
                >
                  Special title treatment
                </span>{' '}
              </Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional
                content.
              </Card.Text>
              <Button variant='primary'>Go somewhere</Button>
            </Card.Body>
            <Card.Footer className='text-muted'>2 days ago</Card.Footer>
          </Card>
        </Col>
      </Row>
      <Pagination>
        <Pagination.First />
        <Pagination.Prev />
        <Pagination.Item>
          {1}
        </Pagination.Item>
        <Pagination.Ellipsis />

        <Pagination.Item>
          {10}
        </Pagination.Item>
        <Pagination.Item>
          {11}
        </Pagination.Item>
        <Pagination.Item active>
          {12}
        </Pagination.Item>
        <Pagination.Item>
          {13}
        </Pagination.Item>
        <Pagination.Item disabled>
          {14}
        </Pagination.Item>

        <Pagination.Ellipsis />
        <Pagination.Item>
          {20}
        </Pagination.Item>
        <Pagination.Next />
        <Pagination.Last />
      </Pagination>
    </Pagination.Item>
  )
}

export default Board
