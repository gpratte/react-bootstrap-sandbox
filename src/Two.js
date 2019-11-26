import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Two extends React.Component {
  render() {
    return (
      <Container>
        <Row className="justify-content-center text-center">
          <Col className="col1">
            1 of 3
          </Col>
          <Col className="col2">Variable width content</Col>
          <Col className="col3">
            3 of 3
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Two
