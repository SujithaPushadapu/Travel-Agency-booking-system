import React from 'react'
import {Routes,Route,Navigate} from 'react-router-dom'
import Home from './../pages/Home';
import About from './../pages/About';
import Tours from './../pages/Tours';
import TourDetails from './../pages/TourDetails';
import Contact from './../pages/Contact';
import Login from './../pages/Login';
import Register from './../pages/Register';
import SearchResultList from './../pages/SearchResultList';
import ThankYou from '../pages/ThankYou';

const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to ='/home' />}/>
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/tours' element={<Tours />} />
        <Route path='/tours/:id' element={<TourDetails />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/thank-you' element={<ThankYou />} />
        <Route path='/tours/search' element={<SearchResultList />} />
    </Routes>
  );
};

export default Routers;