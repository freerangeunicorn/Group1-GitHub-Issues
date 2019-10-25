import React from 'react'
import { Image, Pagination, Row, Col, Nav, Card, Button } from 'react-bootstrap'
import Moment from 'react-moment';
import ReactMarkdown from 'react-markdown' 

const Board = props => {
  return (
    <div>
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
          {props.issues && props.issues.map(issue => {
            return (
              <Card key={issue.id} className='text-center'>
                <Card.Header><Image width={171}
                  height={180}
                  src={issue.owner && issue.owner.avatar_url}
                  alt={issue.description} />
                   {/* #{issue.description} {issue.description} */}
                   </Card.Header>
                <Card.Body>
                  <Card.Title>
                    <span
                      // className='displayModal'
                      // href='#'
                      // onClick={console.log('modal should display on click')}
                    >
                     <a href="#">{issue.full_name}</a> 
                    </span>{' '}
                  </Card.Title>
                  <Card.Text>
                    <ReactMarkdown source={issue.description} />
                  </Card.Text>
                  <Button variant='primary'>Go somewhere</Button>
                </Card.Body>
                <Card.Footer className='text-muted'><Moment fromNow>{issue.created_at}</Moment> </Card.Footer>
              </Card>
            )
          })}

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
      </div>
  )
}

export default Board
