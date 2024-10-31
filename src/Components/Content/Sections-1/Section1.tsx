
import { Button, Col, Container, Row } from 'react-bootstrap'
import './Section1.css'


const Section1 = () => {
  return (
    <>
      <div className="hero-section" style={{ height: '100vh', color: 'white',}}>
        <Container className="h-100 d-flex flex-column justify-content-center align-items-center text-center">
              <h1 >Welcome to Our Website</h1>
              <p className="lead">Your success is our priority. Explore our services and find out how we can help you achieve your goals.</p>
        </Container>
        </div>
    </>
  )
}

export default Section1
