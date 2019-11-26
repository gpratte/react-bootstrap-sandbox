import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

class Three extends React.Component {
  render() {
    return (
      <Container>
        <Row className="justify-content-center text-center">
          <Col className="col-full"> <Button variant="primary">Primary</Button>  </Col>
        </Row>
      </Container>
    );
  }
}
export default Three
