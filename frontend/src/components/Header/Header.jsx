import React, { useEffect, useRef, useContext, useState } from 'react'
import { Container, Row, Button } from 'reactstrap'
import { NavLink, Link, useNavigate, useLocation } from 'react-router-dom'
import Logo from '../../assets/images/logo.png'
import "./header.css"
import { AuthContext } from '../../context/AuthContext'
import UserProfileModal from '../../pages/UserProfileModal'

const nav__links = [
   {
      path: '/home',
      display: 'Home'
   },
   {
      path: '/tours',
      display: 'My trips '
   },
   {
      path:'/my-trip',
      display:'Post Trip'
    },
    {
      path:'/all-trips',
      display:'All Trips'
    },
]

const Header = () => {
   const headerRef = useRef(null)
   const menuRef = useRef(null)
   const navigate = useNavigate()
   const { user, dispatch } = useContext(AuthContext)

   const [showUserProfileModal, setShowUserProfileModal] = useState(false);

   const location = useLocation();
   const currentPath = location.pathname;
   const pathsWithoutHeaderFooter = ['/login', '/register'];
   const isPathWithoutHeaderFooter = pathsWithoutHeaderFooter.includes(currentPath);

   const logout = () => {
      dispatch({ type: 'LOGOUT' })
      navigate('/')
   }

   const stickyHeaderFunc = () => {
      window.addEventListener('scroll', () => {
         if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            headerRef.current.classList.add('sticky__header')
         } else {
            headerRef.current.classList.remove('sticky__header')
         }
      })
   }

   useEffect(() => {
      stickyHeaderFunc()

      return window.removeEventListener('scroll', stickyHeaderFunc)
   })

   const toggleMenu = () => menuRef.current.classList.toggle('show__menu')

   const toggleUserProfileModal = () => {
      setShowUserProfileModal(!showUserProfileModal);
    };

   return (
      // <header className='header' ref={headerRef}>
      <header className={isPathWithoutHeaderFooter ? 'hidden' : 'header'}>
         <Container>
            <Row>
               <div className="nav__wrapper d-flex align-items-center justify-content-between">
                  {/* ========== LOGO ========== */}
                  <div className="logo">
                     <img src={Logo} alt="" />
                  </div>
                  {/* ========================== */}

                  {/* ========== MENU START ========== */}
                  <div className="navigation" ref={menuRef} onClick={toggleMenu}>
                     <ul className="menu d-flex align-items-center gap-5">
                        {
                           nav__links.map((item, index) => (
                              <li className="nav__item" key={index}>
                                 <NavLink to={item.path} className={navClass => navClass.isActive ? 'active__link' : ''}>{item.display}</NavLink>
                              </li>
                           ))
                        }
                     </ul>
                  </div>
                  {/* ================================ */}

                  <div className="nav__right d-flex align-items-center gap-4">
                     <div className="nav__btns d-flex align-items-center gap-2">
                        {
                           user ? <>
                                 <h5 className="mb-0" onClick={toggleUserProfileModal}>
                                 {user.username}</h5>
                                 <Button className='btn btn-dark' onClick={logout}>Logout</Button>
                              </> : <>
                                 {/* <Button className='btn secondary__btn'><Link to='/login'>Login</Link></Button>
                                 <Button className='btn primary__btn'><Link to='/register'>Register</Link></Button> */}
                              </>
                        }
                        {/* <Button className='btn secondary__btn'><Link to='/login'>Login</Link></Button>
                        <Button className='btn primary__btn'><Link to='/register'>Register</Link></Button> */}
                     </div>

                     <span className="mobile__menu" onClick={toggleMenu}>
                        <i class="ri-menu-line"></i>
                     </span>
                     <UserProfileModal user={user} isOpen={showUserProfileModal} toggle={toggleUserProfileModal}/>
                  </div>
               </div>
            </Row>
         </Container>
      </header>
   )
}

export default Header