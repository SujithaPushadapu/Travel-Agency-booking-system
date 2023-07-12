import React from 'react';
import '../styles/home.css';
import {Container,Row,Col} from 'reactstrap';
import backgroundImage from '../assets/images/background.jpg';
// import Subtitle from "./../shared/Subtitle";
import SearchBar from '../shared/SearchBar';
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList';

const Home = () => {
  return( 
  <>
  <section className='home-section' style={{ backgroundImage: `url(${backgroundImage})` }}>
    <Container>
      <Row>
        <Col lg='6'>
          <div className='h-content'>
            
            <h1>The journey of a thousand miles begins with a single step.</h1>
          </div>
          <br/>
          <br/>
          
        </Col>
       <SearchBar />
      </Row>
    </Container>
  </section>


<section>
    <Container>
      <Row>
        <Col lg='12' className='mb-5'>
          <h2 className='featured__tour-title'>Discover the Essence of Exploration</h2>
        </Col>
        <FeaturedTourList />
      </Row>
    </Container>
 </section>
  </>
  );
};

export default Home