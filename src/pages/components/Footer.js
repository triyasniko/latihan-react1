import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col, Container, Button } from 'react-bootstrap';

const Footer=(props)=>{
  return(
    <footer className="bg-light text-center text-lg-start my-5">
        <Container className="p-4 pb-0">
            <form action="">
                <Row>
                    <Col xs={3} className="mb-4 mb-md-0">
                        <p className="pt-2">
                            <strong>Sign up for our newsletter</strong>
                        </p>
                    </Col>
                    <Col xs={6} className="mb-4 mb-md-0">
                        <div className="form-outline mb-4">
                            <input placeholder="Email Address" type="email" className="form-control" />
                        </div>
                    </Col>
                    <Col xs={3} className="mb-4 mb-md-0">
                        <Button variant="primary" type="submit" className="mb-4">
                            Subscribe
                        </Button>
                    </Col>
                </Row>
            </form>
        </Container>
        <div className="text-center p-3 bg-dark text-white">
            © 2022 Copyright
            <a className="text-white text-decoration-none" href="#"> Situsku</a>
        </div>
    </footer>
  )
}
export default Footer;