import React from 'react'
import { Container, Nav, Navbar, NavbarBrand, NavDropdown } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import '../css/navigationStyle.css'

export default function Navigation() {
  return (
    <>
      <nav
        className='navbar sticky-top navbar-expand-lg navbar-light bg-light'
        id='navigation-bar'
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}
      >
        <div>
          <a className='navbar-brand' href='#'>
            <img src='/logo-img.png' alt='' style={{ maxWidth: '200px', maxHeight: '50px' }} />
          </a>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            flexDirection: 'row',
          }}
          className='collapse navbar-collapse'
        >
          <div id='navigation-links' className='navbar-nav'>
            <a className='nav-item nav-link active' href='#'>
              Home <span className='sr-only'></span>
            </a>
            <a style={{ color: '#25A8CC' }} className='nav-item nav-link ' href='#contact-section'>
              Contact
            </a>
            <a style={{ color: '#25A8CC' }} className='nav-item nav-link' href='#featured-section'>
              Projects
            </a>
            <a className='nav-item nav-link' href='#about-section'>
              About
            </a>
          </div>
        </div>
      </nav>
    </>
  )
}
