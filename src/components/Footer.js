import React from 'react'
import { Container, Row } from 'react-bootstrap'

const Footer = () => {
  return (
    <Container className='footer'>
      <Row>
        <div className='fixed-bottom text-center py-3'>
          © 2019 Copyright:
          <a href='https://github.com/freerangeunicorn/Group1-GitHub-Issues/'>
            {' '}Parsa, Mai, Ed , Thi and Duc
          </a>
        </div>
      </Row>
    </Container>
  )
}

export default Footer
