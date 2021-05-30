import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PageHeader from './PageHeader';

const EmptyLayout = ({ children }) => {
  return (
    <div className="mainPage">
      <PageHeader />
      <Container className="main-container">
        <Row>{children}</Row>
      </Container>
    </div>
  );
};

export default EmptyLayout;
