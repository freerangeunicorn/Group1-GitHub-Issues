import React from "react";
import {
  Image,
  Pagination,
  Row,
  Col,
  Nav,
  Card,
  Button,
  Badge,
  Container
} from "react-bootstrap";
import Moment from "react-moment";
import ReactMarkdown from "react-markdown";

const Board = props => {
  return (
    <div>
      <Row>
        <Col>
          <Nav className="justify-content-end" activeKey="/home">
            <Nav.Item>
              <Nav.Link href="/home">Filter or Sort</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-1">Filter or Sort</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2">Filter or Sort</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Button onClick={props.toggle}>New Issue</Button>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>
      <Row>
        <Col>
          {props.repoIssues &&
            props.repoIssues.map(issue => {
              {
                /* {props.issues && props.issues.map(issue => { */
              }
              return (
                <Container className="container-fluid">
                  <Card
                    key={issue.id}
                    className="text-left"
                    style={{
                      width: "50rem",
                      display: "flex",
                      position: "center,"
                    }}
                  >
                    <Card.Header>
                      Name: {issue.user.login} / {issue.open_issues} Open issue
                      {issue.number}

                      {/* issuenumber here */}
                      {/* #{issue.description} {issue.description} */}
                    </Card.Header>
                    <Card.Body>
                      <Card.Title>
                        <Row>
                          <Image
                            width={50}
                            height={50}
                            src={issue.owner && issue.owner.avatar_url}
                            alt={issue.description}
                          />
                        </Row>
                        {issue.title}
                        <span
                        // className='displayModal'
                        // href='#'
                        // onClick={console.log('modal should display on click')}
                        >
                          <a href="#" onClick={props.toggle}>
                            {issue.full_name}
                          </a>
                        </span>{" "}
                      </Card.Title>
                      <Card.Text>
                        <ReactMarkdown source={issue.body} />
                      </Card.Text>
                      <div>
                        <Badge variant="success">Success</Badge>
                        <Badge variant="danger">Danger</Badge>
                        <Badge variant="warning">Warning</Badge>
                        <Badge variant="info">Info</Badge>
                      </div>
                    </Card.Body>
                    <Card.Footer className="text-muted">
                      <Moment fromNow>{issue.created_at}</Moment>{" "}
                    </Card.Footer>
                  </Card>
                </Container>
              );
            })}
        </Col>
      </Row>
      <Pagination>
        <Pagination.First />
        <Pagination.Prev />
        <Pagination.Item>{1}</Pagination.Item>
        <Pagination.Ellipsis />

        <Pagination.Item>{10}</Pagination.Item>
        <Pagination.Item>{11}</Pagination.Item>
        <Pagination.Item active>{12}</Pagination.Item>
        <Pagination.Item>{13}</Pagination.Item>
        <Pagination.Item disabled>{14}</Pagination.Item>

        <Pagination.Ellipsis />
        <Pagination.Item>{20}</Pagination.Item>
        <Pagination.Next />
        <Pagination.Last />
      </Pagination>
    </div>
  );
};

export default Board;
