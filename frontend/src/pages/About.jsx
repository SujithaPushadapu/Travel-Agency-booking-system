import React from 'react';
import '../styles/about.css';
import ServiceList from '../services/ServiceList';
import {Container,Row,Col} from 'reactstrap';
import MasonryImagesGallery from '../components/Image-gallery/MasonryImagesGallery';
const About = () => {
  return (
    <>
    <section className='about-section'>
    <Container>
    <h2 className='heading__part'>OUR SERVICES</h2>
      <Row className='list'>
        <ServiceList/>
      </Row>
    </Container>
  </section>


  <section>
    <Container>
      <Row>
        <Col>
        <h2 className='gallery__part'>
          GALLERY OF OUR CUSTOMERS
        </h2>
        </Col>

        <Col lg='12'>
          <MasonryImagesGallery/>
        </Col>
      </Row>
    </Container>
  </section>
    </>
  )
}

export default About