import React from "react";
import { Container, Col, Row } from "react-bootstrap";

const styles = {
  header: {
    marginTop: "1em",
    textAlign: "center"
  },
  content: {
    marginTop: "2em"
  }
};

const BaseLayout = Component =>
  class extends React.Component {
    render() {
      return (
        <React.Fragment>
          <Container>
            <Row>
              <Col sm={2}></Col>
              <Col sm={8}>
                <h1 style={styles.header}>Station.IO</h1>
              </Col>
              <Col sm={2}></Col>
            </Row>
            <Row style={styles.content}>
              <Col sm={2}></Col>
              <Col sm={8} style={{textAlign:"center"}}>
                <Component {...this.props} />
              </Col>
              <Col sm={2}></Col>
            </Row>
          </Container>
        </React.Fragment>
      );
    }
  };

export default BaseLayout;
