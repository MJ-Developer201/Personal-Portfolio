import React from 'react'
import '../css/HeroSectionStyles.css'

import { Button } from '@mui/material'

export default function HeroSection() {
  return (
    <div className='background-image'>
      <div className='overlay'>
        <div className='hero-div'>
          <div className='background-hero'>
            <h1 style={{ fontWeight: '800', wordSpacing: '1rem', letterSpacing: '0.3rem' }}>
              <span style={{ color: '#25A8CC' }}>Marc</span>us Ferguson
            </h1>
            <h3 style={{ marginBlock: '1rem' }}>Full Stack Web Dev</h3>
            <div style={{ textAlign: 'center', justifyContent: 'center' }}>
              <h6 style={{ maxWidth: '30rem', wordSpacing: '2px', lineHeight: '30px', marginTop: '1rem' }}>
                Professional Web Developer who's passion is to code modern, responsive web applications and
                mobile designs.
              </h6>
            </div>
            <div style={{ marginTop: '2rem' }}>
              <Button style={{ color: 'white' }} size='large' variant='contained' color='secondary'>
                <a style={{ textDecoration: 'none', color: 'white' }} href='#featured-section'>
                  View My Work
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
