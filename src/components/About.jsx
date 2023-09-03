import React from 'react'
import '../css/aboutStyles.css'

export default function About() {
  const gradient = 'rgba(rgba(246, 246, 246, 1) '

  return (
    <div
      id='about-section'
      className='about-section'
      style={{
        color: 'rgb(61,61,61)',
        textShadow: '0 2px 3px rgba(0,0,0,0.2)',
        display: 'grid',
        gridTemplateColumns: '40% 1fr',
        backgroundColor: 'rgba(246,246,246,1)',
        padding: '5rem',
        justifyContent: 'center',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <h2>About Me</h2>
      </div>

      <h5 style={{ lineHeight: '2.2rem' }}>
        I'm dedicated developer with a passion for crafting dynamic and user-centric web applications. With a
        solid foundation in <span style={{ color: '#25A8CC' }}>Html</span> ,{' '}
        <span style={{ color: '#25A8CC' }}>Css</span> ,<span style={{ color: '#25A8CC' }}>Javascript</span> ,
        I'm driven by the creation & transformation of ideas into functional and visually appealing websites.
        My journey into the world of coding has been fueled by a curiosity to learn, adapt, and build
        innovative projects. From designing responsive layouts to implementing backend logic, I'm committed to
        delivering a fluid and user-friendly experience. If you would like to know more about me and my coding
        journey head over to my
        <a className='anchor' href='https://dev-201.com/'>
          <strong className='blog-button' style={{ color: '#4ED2FB' }}>
            Blog
          </strong>
        </a>
        site .
      </h5>
    </div>
  )
}
