import React from 'react';
import ServiceCard from "./ServiceCard";
import { Col } from 'reactstrap';

import exploreImg from '../assets/images/explore.jpg';
import fastImg from '../assets/images/fast.jpg';
import supportImg from '../assets/images/support.jpg';
import clientImg from '../assets/images/clients.jpg';


const servicesData=[
  {
    imgUrl:exploreImg,
    title:"Embark on a journey of exploration",
    desc:"Immerse yourself in a remarkable journey, as you delve into the very best attractions, captivating tours, exciting activities, and a wealth of other exceptional experiences awaiting you.",
  },
  {
    imgUrl:fastImg,
    title:"Fast and versatile",
    desc:"Secure your tickets online within minutes, with the added benefit of free cancellation on numerous attractions.",
  },
  {
    imgUrl:supportImg,
    title:"Assistance at your fingertips",
    desc:"we'll take you there.com's dedicated Customer Service team is at your service around the clock, 24/7, ready to assist you promptly and efficiently.",
  },
  {
    imgUrl:clientImg,
    title:"Delighted clients are our greatest treasures",
    desc:"Our utmost priority is to create extraordinary moments and awe-inspiring experiences for our valued clients, who are our greatest treasures.",
  },
]
const ServiceList = () => {
  return ( 
  <>
   {servicesData.map((item,index)=>( 
    <Col lg='3' key={index}>
      <ServiceCard item={item}/>
      
    </Col>
    ))}
  </>
  );
};

export default ServiceList