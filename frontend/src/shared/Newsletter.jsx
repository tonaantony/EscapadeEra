import React from 'react'
import './newsletter.css'
import { Container, Row, Col } from 'reactstrap'
import maleTourist from '../assets/images/male-tourist.png'

const NewsLetter = () => {
   return (
     <section className="newsletter">
       <Container>
         <Row>
           <Col lg="6">
             <div className="newsletter__content">
               <h2>Subcribe now to get useful traveling information</h2>

               <div className="newsletter__input">
                 <input type="email" placeholder="Enter your email" />
                 <button className="btn newsletter__btn">Subcribe</button>
               </div>
               <p>
                 {""}
                 EscapadeEra help eliminate the loneliness and boredom that
                 can come with traveling solo, and offer an opportunity to learn
                 new things from people with different backgrounds and cultures.
               </p>
             </div>
           </Col>
           <Col lg="6">
             <div className="newsletter__img">
               <img src={maleTourist} alt="" />
             </div>
           </Col>
         </Row>
       </Container>
     </section>
   );
}

export default NewsLetter