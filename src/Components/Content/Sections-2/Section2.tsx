
import { Container, Row, Col, Card, Button } from 'react-bootstrap'


const Section2 = () => {
  return (
    <>
      <Container className='container mt-5' style={{color: 'white',}}>
        <h1 className='text-center'> Section 2</h1>
          <Container className='mt-4'>
            <Row>
              <Col md={5} sm={12}>
                  <div className='container mt-5'>
                    <div>
                      <h1 className='mx-auto my-auto text-center'>KUBAYAZHI Member Seemore!!!</h1>
                      <p className='d-flex justify-content-center text-center mt-3'>Lorem ipsum dolor
                        <br /> sit amet consectetur adipisicing elit. 
                        Vitae voluptates quibusdam eveniet animi sit laudantium
                        <br /> 
                        accusamus debitis possimus. Aliquid, temporibus!</p>
                        <div className='d-flex justify-content-center mt-3'>
                          <Button className='mx-auto my-auto mb-2'>
                            See more ...
                          </Button>
                        </div>
                    </div>
                  </div>
              </Col>

              <Col md={7} sm={12} className='text-center'>
                {/* <h1>Main Content</h1>
                <p>This is the main content area.</p> */}
                  <Card className='border'>
                    <Card.Img variant="top" src="https://placehold.co/900x620" />
                  </Card>
              </Col>
            </Row>
          </Container>
      </Container>
    </>
  )
}

export default Section2
