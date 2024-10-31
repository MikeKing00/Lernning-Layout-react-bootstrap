import { Card, Col, Container, Row } from "react-bootstrap"


const Section4 = () => {
  return (
    <>
        <Container className='container mt-5' style={{color: 'white',}}>
          <h1 className='text-center'> Section 4</h1>
          <div className="justify-content-center text-center p-4">
              <img src="https://placehold.co/95x95" alt="" style={{borderRadius:"50%"}}/>
              <p className="mt-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br/>
              Dolorem officia enim perspiciatis ullam et magnam tenetur nobis ratione <br/>
              porro adipisci aliquid natus aspernatur similique sequi optio tempore sint, <br/>
              esse laboriosam!</p>
          </div>
          <div>
            <Row>
              <Col md={4} sm={12}>
                  <Card>
                  <Card.Img variant="top" src="https://placehold.co/100x100" />
                    <Card.Body>
                      <Card.Title>Card title</Card.Title>
                      <Card.Text>
                          This is a longer card with supporting text below as a natural
                          lead-in to additional content. This content is a little bit
                          longer.
                      </Card.Text>
                    </Card.Body>
                  </Card>
              </Col>
              <Col md={4} sm={12}>
                  <Card>
                  <Card.Img variant="top" src="https://placehold.co/100x100" />
                    <Card.Body>
                      <Card.Title>Card title</Card.Title>
                      <Card.Text>
                          This is a longer card with supporting text below as a natural
                          lead-in to additional content. This content is a little bit
                          longer.
                      </Card.Text>
                    </Card.Body>
                  </Card>
              </Col>
              <Col md={4} sm={12}>
                  <Card>
                  <Card.Img variant="top" src="https://placehold.co/100x100" />
                    <Card.Body>
                      <Card.Title>Card title</Card.Title>
                      <Card.Text>
                          This is a longer card with supporting text below as a natural
                          lead-in to additional content. This content is a little bit
                          longer.
                      </Card.Text>
                    </Card.Body>
                  </Card>
              </Col>
            </Row>
          </div>
      </Container>
    </>
  )
}

export default Section4
