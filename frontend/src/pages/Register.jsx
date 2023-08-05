import React, { useState, useContext } from 'react'
import { Container, Row, Col, Form, FormGroup, Button } from 'reactstrap'
import '../styles/register.css'
import { Link, useNavigate } from 'react-router-dom'
import registerImg from '../assets/images/login.png'
import userIcon from '../assets/images/user.png'
import { AuthContext } from '../context/AuthContext'
import { BASE_URL } from '../utils/config'

const Register = () => {
   const [credentials, setCredentials] = useState({
      userName: undefined,
      fullname: undefined,
      email: undefined,
      password: undefined,
      age: undefined,
      aadhar: undefined,
      address: undefined,
      photo: '',
   })

   const {dispatch} = useContext(AuthContext)
   const navigate = useNavigate()

   const handleChange = e => {
      setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }))
   }

   const handleClick = async e => {
      e.preventDefault()

      try {
         const res = await fetch(`${BASE_URL}/auth/register`, {
            method:'post',
            headers: {
               'content-type':'application/json'
            },
            body: JSON.stringify(credentials)
         })
         const result = await res.json()

         if(!res.ok) alert(result.message)

         dispatch({type:'REGISTER_SUCCESS'})
         navigate('/login')
      } catch(err) {
         alert(err.message)
      }
   }

   return (
      <section>
         <Container>
            <Row>
               <Col lg='8' className='m-auto'>
                  <div className="register__container d-flex justify-content-between">
                     <div className="register__img">
                        <img src={registerImg} alt="" />
                     </div>

                     <div className="register__form">
                        <div className="user">
                           <img src={userIcon} alt="" />
                        </div>
                        <h2>Register</h2>

                        <Form onSubmit={handleClick}>
                           <FormGroup>
                              <input type="text" placeholder='username' id='username' onChange={handleChange} required />
                           </FormGroup>
                           <FormGroup>
                              <input type="text" placeholder='Full Name' id='fullname' onChange={handleChange} required />
                           </FormGroup>
                           <FormGroup>
                              <input type="email" placeholder='Email' id='email' onChange={handleChange} required />
                           </FormGroup>
                           <FormGroup>
                              <input type="password" placeholder='Password' id='password' onChange={handleChange} required />
                           </FormGroup>
                           <FormGroup>
                              <input type="number" placeholder='Age' id='age' onChange={handleChange} required />
                           </FormGroup>
                           <FormGroup>
                              <input type="text" placeholder='Aadhar Number' id='aadhar' onChange={handleChange} required />
                           </FormGroup>
                           <FormGroup>
                              <input type="text" placeholder='Address' id='address' onChange={handleChange} required />
                           </FormGroup>
                           <FormGroup>
                              <input type="text" placeholder='Photo URL' id='photo' onChange={handleChange} required />
                           </FormGroup>
                           <Button className='btn secondary__btn auth__btn' type='submit'>Create Account</Button>
                        </Form>
                        <p>Already have an account? <Link to='/login'>Login</Link></p>
                     </div>
                  </div>
               </Col>
            </Row>
         </Container>
      </section>
   )
}

export default Register