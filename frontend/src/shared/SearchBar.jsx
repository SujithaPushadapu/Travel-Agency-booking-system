import React,{useRef} from 'react'
import './search-bar.css'
import {Col,Form,FormGroup} from "reactstrap";
const SearchBar = () => {

  const locationRef=useRef('')
  const searchHandler=()=>{
    const location =locationRef.current.value
    if(location===''){
      return alert("This field is required!");
    }
  }



  return <Col lg='12'>
    <div className='search__bar'>
      <Form className='d-flex align-items-center gap-4'>
        <FormGroup className="d-flex gap-3 form__group form__group-fast">
          <span><i class="ri-map-pin-line"></i></span>
          <div>
            <h4 className='heading'>Location</h4>
            <input type='text' placeholder='Destination' ref={locationRef}/>
          </div>
        </FormGroup>

        <span className='search__icon' type='submit' onClick={searchHandler}>
        <i class="ri-search-line"></i>
        </span>
      </Form>
    </div>
  </Col>
}

export default SearchBar