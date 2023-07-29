import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import ThankYou from '../pages/ThankYou'
import Home from './../pages/Home'
import Login from './../pages/Login'
import Register from './../pages/Register'
import SearchResultList from './../pages/SearchResultList'
import TourDetails from './../pages/TourDetails'
import Tours from './../pages/Tours'
import MasonryImagesGallery from '../components/Image-gallery/MasonryImagesGallery'
import MyTrip from '../pages/MyTrip'
import TripPosted from '../pages/TripPosted'

const Routers = () => {
   return (
      <Routes>
         <Route path='/' element={<Navigate to='/home'/>} />
         <Route path='/home' element={<Home/>} />
         <Route path='/tours' element={<Tours/>} />
         <Route path="/my-trip" element={<MyTrip/>} />
         <Route path='/tours/:id' element={<TourDetails/>} />
         <Route path='/login' element={<Login/>} />
         <Route path='/register' element={<Register/>} />
         <Route path='/thank-you' element={<ThankYou/>} />
         <Route path='/trip-posted' element={<TripPosted/>} />
         <Route path='/tours/search' element={<SearchResultList/>} />
         <Route path='/gallery' element={<MasonryImagesGallery />} />
      </Routes>
   )
}

export default Routers