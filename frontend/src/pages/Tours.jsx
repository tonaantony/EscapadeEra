import React, { useEffect, useContext, useState } from 'react';
import { BASE_URL } from '../utils/config';
import '../styles/all-trips.css';
import { Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext.js';


const Tours = () => {
  const { user } = useContext(AuthContext);
  const [myTrips, setMyTrips] = useState([]);
  

  const fetchMyTrips = async () => {
    try {
      const response = await fetch(`${BASE_URL}/mytrips/`);
      if (!response.ok) {
        throw new Error('Failed to fetch trips.');
      }
      const data = await response.json();
      setMyTrips(data);
      console.log('Fetched trips:', data);
    } catch (error) {
      console.error('Error fetching trips:', error);
    }
  };

  useEffect(() => {
    fetchMyTrips();
  }, []);

  

  
  const Navigate = useNavigate();
  async function findPartners(){

  }

  return (
    <div className="all-trips-container">
      <h2>My Trips</h2>
      
      <div className="trip-cards-container">
        {/* Show all trips initially */}
        {myTrips.map((trip) => (
          <div key={trip._id} className="trip-card">
            <h3>{trip.fullName}</h3>
            <p>Location: {trip.location}</p>
            <p>From: {new Date(trip.fromDate).toLocaleDateString()}</p>
            <p>To: {new Date(trip.toDate).toLocaleDateString()}</p>
            <p>Description: {trip.description}</p>
            <div className='join'>
              <Button type="button" className="btn primary__btn w-100 mt-4" onClick={() => findPartners(trip._id)}>
                Join
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tours;





//delete above and uncomment bellow to work
// import React, { useState, useEffect } from 'react'
// import CommonSection from '../shared/CommonSection'
// import tourData from '../assets/data/tours'
// import '../styles/tour.css'
// import TourCard from './../shared/TourCard'
// import SearchBar from './../shared/SearchBar'
// import Newsletter from './../shared/Newsletter'
// import { Col, Container, Row } from 'reactstrap'
// import useFetch from '../hooks/useFetch'
// import { BASE_URL } from '../utils/config'


// const Tours = () => {
//    const [pageCount, setPageCount] = useState(0)
//    const [page, setPage] = useState(0)

//    const { data: tours, loading, error } = useFetch(`${BASE_URL}/tours?page=${page}`)
//    const { data: tourCount } = useFetch(`${BASE_URL}/tours/search/getTourCount`)

//    useEffect(() => {
//       const pages = Math.ceil(tourCount / 8)
//       setPageCount(pages)
//       window.scrollTo(0,0)
//    }, [page, tourCount, tours])

//    return (
//      <>
//        {/* <CommonSection
//          title={
//            "Find your perfect travel buddy now!!"
//          }
//        />
//        <section>
//          <Container>
//            <Row>
//              <SearchBar />
//            </Row>
//          </Container>
//        </section>

//        <section className="pt-0">
//          <Container>
          
//              <Row>
//                {
//                tourData?.map((tour) => (
//                  <Col lg="3" md="6" sm="6" className="mb-4" key={tour._id}>
//                    {" "}
//                    <TourCard tour={tour} />{" "}
//                  </Col>
//                ))}

//                <Col lg="12">
//                  <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
//                    {[...Array(pageCount).keys()].map((number) => (
//                      <span
//                        key={number}
//                        onClick={() => setPage(number)}
//                        className={page === number ? "active__page" : ""}
//                      >
//                        {number + 1}
//                      </span>
//                    ))}
//                  </div>
//                </Col>
//              </Row>
           
//          </Container>
//        </section>
//        <Newsletter /> */}
//      </>
//    );
// }

// export default Tours