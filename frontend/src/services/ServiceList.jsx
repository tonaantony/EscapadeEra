import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from 'reactstrap'
import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData = [
  {
    imgUrl: weatherImg,
    title: "Trip planning",
    desc: "Allow users to plan their trips by selecting destinations, booking accommodations, and adding activities",
  },
  {
    imgUrl: guideImg,
    title: "User Matching",
    desc: "The website should have a mechanism that matches travelers with similar interests and preferences.",
  },
  {
    imgUrl: customizationImg,
    title: "Location based searches",
    desc: "The website helps to find your partner based on the location",
  },
];

const ServiceList = () => {
   return <>
      {
         servicesData.map((item, index) => (
            <Col lg='3' md='6' sm='12' className='mb-4' key={index}>
               <ServiceCard item={item} />
            </Col>))
      }
   </>

}

export default ServiceList