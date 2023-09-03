import { Divider } from '@mui/material'
import React from 'react'
import { AiFillHtml5 } from 'react-icons/ai'
import { BiLogoFirebase, BiLogoJavascript, BiLogoMongodb, BiLogoReact } from 'react-icons/bi'
import { BiLogoCss3 } from 'react-icons/bi'
import { DiJavascript } from 'react-icons/di'

import { FaNodeJs } from 'react-icons/fa'

export default function FeatureProject() {
  return (
    <>
      <div
        id='featured-section'
        style={{ display: 'flex', backgroundColor: 'white', justifyContent: 'center', paddingBlock: '2rem' }}
      >
        <div className='card' style={{ maxWidth: '650px', marginTop: '5rem' }}>
          <img
            className='card-img-top'
            src='/landing-page.png'
            style={{ maxHeight: '650px', maxWidth: '650px' }}
            alt=''
          />
          <div className='card-body'>
            <h5 className='card-title'>Nex Connect</h5>
            <p className='card-text'>
              A social media platform that brings people together, Express, share, and engage. Make new
              friends, post memories, and discover new horizons.
            </p>
            <div className='' style={{ display: 'flex', gap: '1rem' }}>
              <a style={{}} href='https://nexconnet.com/' className='btn btn-primary'>
                Live Site
              </a>
              <a href='#' className='btn btn-primary'>
                Github
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div
          className='icons-bottom'
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            backgroundColor: 'white',
            color: 'black',
            paddingBottom: '3rem',
          }}
        >
          <div
            style={{
              maxWidth: '700px',
              display: 'flex',
              gap: '4rem',
              justifyContent: 'center',
              alignItems: 'center',
              flexWrap: 'wrap',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <AiFillHtml5 color='rgb(228,77,38)' fontSize={'2rem'} />
              <p style={{ fontSize: '0.7rem' }}>Html</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <BiLogoCss3 color='rgb(33,76,229)' fontSize={'2rem'} />

              <p style={{ fontSize: '0.7rem' }}>Css</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <DiJavascript color='rgb(240,220,78)' fontSize={'2rem'} />
              <p style={{ fontSize: '0.7rem' }}>Javascript</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <BiLogoReact color='rgb(97,218,251)' fontSize={'2rem'} />
              <p style={{ fontSize: '0.7rem' }}>React</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <FaNodeJs color='rgb(120,177,98)' fontSize={'2rem'} />
              <p style={{ fontSize: '0.7rem' }}>Node.js</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <BiLogoMongodb color='rgb(84,179,69)' fontSize={'2rem'} />
              <p style={{ fontSize: '0.7rem' }}>Mongodb</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <BiLogoFirebase color='rgb(255,204,42)' fontSize={'2rem'} />
              <p style={{ fontSize: '0.7rem' }}>Firebase</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
