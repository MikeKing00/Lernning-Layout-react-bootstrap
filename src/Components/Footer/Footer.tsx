import React from 'react';
import { Container, Row, Col, Form, Button, } from 'react-bootstrap'
import './Footer.css'
import {Envelope, Facebook, Github, HouseExclamationFill, Line,  TelephoneFill, Twitch, Twitter, Youtube } from 'react-bootstrap-icons';



const Footer: React.FC = () => {
  return (
    <>
      <footer className="bg-dark text-white mt-5">
        <Container>
          <Row className="py-4">
            <Col xs={12} md={4} className="mb-3 mb-md-0">
              <h5>About us</h5>
              <p>Conetors</p>
              <p>Blog</p>
              <p>Story</p>
              <p>Tamplate</p>
              <p>Solutions</p>
            </Col>
            <Col xs={12} md={4} className="mb-3 mb-md-0">
              <h5>Contact us</h5>
              <Row className="align-items-center">
                <Col xs="auto">
                  <HouseExclamationFill size={15} />
                </Col>
                <Col>
                  <p className="mb-0">189/59 R.Raikhink-32<br/> 
                  T.Raikhong
                  A.Samphran NakhonpraThom</p>
                </Col>
              </Row>
              <Row className="align-items-center mt-2">
                <Col xs="auto">
                  <TelephoneFill size={15} />
                </Col>
                <Col>
                  <p className="mb-0">+6691-743-5833 , +6696-786-8041</p>
                </Col>
              </Row>
              <Row className="align-items-center mt-2">
                <Col xs="auto">
                  <Envelope size={15} />
                </Col>
                <Col>
                  <p className="mb-0">Kubayazhi@gmail.com <br/>
                  klettc2560@gmail.com</p>
                </Col>
              </Row>
            </Col>
            <Col xs={12} md={4} className="mb-3 mb-md-0">
              <h5>Follow to get more information.</h5>
              <Form>
                <Row className="align-items-center">
                  <Col xs="auto">
                    <Form.Label htmlFor="inlineFormInput" visuallyHidden>
                      Name
                      </Form.Label>
                      <Form.Control
                        className="mb-2"
                        id="inlineFormInput"
                        placeholder="Please enter your email..."
                      /> 
                  </Col>
                  <Col xs="auto">
                    <Button type="submit" className="mb-2">
                      Subscribe
                    </Button>
                  </Col>
                </Row>
              </Form>
              <Row className="my-4">
              <Col className="text-center">
                <h5>Social media</h5>
                <a href=""><Facebook size={25} className="m-2 text-white" /></a>
                <a href=""><Line size={25} className="m-2 text-white" /></a>
                <a href=""><Github size={25} className="m-2 text-white" /></a>
                <a href=""><Twitter size={25} className="m-2 text-white" /></a>
                <a href=""><Twitch size={25} className="m-2 text-white" /></a>
                <a href=""><Youtube size={25} className="m-2 text-white" /></a>
                
              </Col>
            </Row>
            </Col>
          </Row>  
          <Row>
            <Col className="text-center py-3">
              <small>&copy; 2023 Kubayazhi. reserve the copyright.</small>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default Footer
