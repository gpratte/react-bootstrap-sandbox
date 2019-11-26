import React from 'react'
import './One.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Two from './Two';
import Three from './Three';

class One extends React.Component {

  render() {
    return (
      <Container>
        <Row>
          <Col> <Two/> </Col>
        </Row>
        <Row>
          <Col> <Three/> </Col>
        </Row>
      </Container>
    );
  }
}
export default One
