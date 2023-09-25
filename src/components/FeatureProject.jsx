import { Divider } from '@mui/material'
import React from 'react'
import { AiFillHtml5 } from 'react-icons/ai'
import { BiLogoFirebase, BiLogoJavascript, BiLogoMongodb, BiLogoReact } from 'react-icons/bi'
import { BiLogoCss3 } from 'react-icons/bi'
import { DiJavascript } from 'react-icons/di'
import { BiLogoPostgresql } from 'react-icons/bi'

import { FaNodeJs } from 'react-icons/fa'

export default function FeatureProject() {
  return (
    <>
      <div
        id='featured-section'
        style={{
          display: 'flex',
          backgroundColor: 'white',
          justifyContent: 'center',
          paddingBlock: '2rem',
          paddingInline: '0.5rem',
        }}
      >
        <div className='card' style={{ maxWidth: '650px', marginTop: '5rem' }}>
          <img
            className='card-img-top'
            src='/localhost_5174_analytics(Tv 1080).png'
            style={{ maxHeight: '650px', maxWidth: '650px' }}
            alt=''
          />
          <div className='card-body'>
            <h5 className='card-title'>Issue Hold</h5>
            <p className='card-text' style={{ lineHeight: '1.7rem' }}>
              A tracking with project management capabilities. Users can easily create projects, assign tasks,
              and effectively manage critical issues within their application. 'Issue Hold' offers a
              simplified approach to core ticket tracking features."
            </p>
            <div className='' style={{ display: 'flex', gap: '1rem' }}>
              <a style={{}} href='https://issuehold.com/' className='btn btn-primary' target='_blank'>
                Live Site
              </a>
              <a
                href='https://github.com/MJ-Developer201/bug-tracker-client'
                target='_blank'
                className='btn btn-primary'
              >
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
              <BiLogoPostgresql color='rgb(48,103,146)' fontSize={'2rem'} />
              <p style={{ fontSize: '0.7rem' }}>Postgresql</p>
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
