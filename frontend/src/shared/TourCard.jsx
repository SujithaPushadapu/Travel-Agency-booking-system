import React from 'react'
import {Card,CardBody} from "reactstrap";
import {Link} from 'react-router-dom';
import './tour-card.css';

const TourCard = ({tour}) => {
    const {id,title,city,photo,price,featured,avgrating,reviews}=tour
  return (
    <div className='tour__card'>
        <Card>
            <div className='tour__img'>
                <img src={photo} alt="tour-img"/>

            </div>

            <CardBody>
            <div className='card__top d-flex align-items-center justify-content-between'>
                {city}
            </div>
            <h5 className='tour__title'><Link to={`/tours/${id}`}>{title}</Link></h5>
       
          <div className='card__bottom d-flex align-items-center justify-content-between mt-3'>
            <h5>${price} <span>/per person</span></h5>
            <button className='btn booking__btn'>
                <Link to={`/tours/${id}`}>Book Now</Link>
            </button>
          </div>
        </CardBody>
        </Card>
        
        </div>
  )
}

export default TourCard