import { Card, Col, Container, Row } from "react-bootstrap"


const Section3 = () => {
  return (
    <>
      <Container className='container mt-5'style={{color: 'white',}}>
        <h1 className='text-center mt-5'> Section 3</h1>
        <Row xs={1} md={2} className="g-4 mt-3">
            {Array.from({ length: 4 }).map((_, idx) => (
                <Col key={idx}>
                <Card>
                    <Card.Img variant="top" src="https://placehold.co/453x160" />
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
            ))}
        </Row>
      </Container>
    </>
  )
}

export default Section3
