import React from 'react'
import './footer.css'
import {Container,Row,Col,ListGroup,ListGroupItem} from 'reactstrap';
import {Link} from 'react-router-dom';

const quick__links=[
  {
    path:'/home',
    display:'Home' 
  },
  {
    path:'/about',
    display:'About'
  },
  {
    path:'/tours',
    display:'Tours'
  },
];

const quick__links2=[
  {
    path:'/gallery',
    display:'Gallery' 
  },
  {
    path:'/login',
    display:'Login'
  },
  {
    path:'/Register',
    display:'Register'
  },
 
];
const quick__links1=[
  {
    path:'/contact',
    display:'Contact Us'
  },
];

const Footer = () => {
  return (
    <footer className='footer'>
      <Container>
        <Row>


          <Col lg='3'>
            <h5 className='footer__link-title'>Discover</h5>
            <ListGroup className='footer__quick-links'>
            {quick__links.map((item,index)=>(
              <ListGroupItem key={index} className='ps-0 border-0'>
                <Link to={item.path}>{item.display}</Link>
              </ListGroupItem>
            ))}
            </ListGroup>
          </Col>


          <Col lg='3'>
            <h5 className='footer__link-title'>Links</h5>
            <ListGroup className='footer__quick-links'>
            {quick__links2.map((item,index)=>(
              <ListGroupItem key={index} className='ps-0 border-0'>
                <Link to={item.path}>{item.display}</Link>
              </ListGroupItem>
            ))}
            </ListGroup>
          </Col>

          <Col lg='3'>
            {/* <h5 className='footer__link-title'>Discr</h5> */}
            <ListGroup className='footer__quick-links1'>
            {quick__links1.map((item,index)=>(
              <ListGroupItem key={index} className='ps-0 border-0'>
                <br/>
                <br/>
                <Link to={item.path}>{item.display}</Link>
              </ListGroupItem>
            ))}
            </ListGroup>
          </Col>

          <Col lg="3">
            <br/>
            <br/>
            <h5 footer__link-title1>Coming soon on</h5>
            <div className='social__links d-flex align-items-center gap-4'>
              <span>
                <Link to='#'><i class="ri-instagram-line"></i></Link>
              </span>
              <span>
                <Link to='#'><i class="ri-facebook-circle-line"></i></Link>
              </span>
              <span>
                <Link to='#'><i class="ri-youtube-line"></i></Link>
              </span>
            </div>
          </Col>

        </Row>
      </Container>
    </footer>
  )
}

export default Footer