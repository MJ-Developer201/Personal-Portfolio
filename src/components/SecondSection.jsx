import React from 'react'
import '../css/secondSection.css'
import { AiFillHtml5 } from 'react-icons/ai'
import { BiLogoCss3, BiLogoJavascript, BiLogoReact, BiSolidFileCss } from 'react-icons/bi'
import { DiJavascript } from 'react-icons/di'
import { BiLogoMongodb } from 'react-icons/bi'

export default function SecondSection() {
  return (
    <div style={{}} className='second-background'>
      <div
        style={{
          display: 'flex',
          gap: '3rem',
          justifyContent: 'center',
          gap: '5rem',
          paddingInline: '2rem',
        }}
        className='second-div'
      >
        <div>
          <div className='card'>
            <img
              className='card-img-top'
              src='/Screen Shot 2023-09-24 at 04.44.16.png'
              style={{ maxHeight: '272px', maxWidth: 'auto' }}
              alt=''
            />
            <div className='card-body'>
              <h5 className='card-title'>Dire Ride </h5>
              <p className='card-text' style={{ maxWidth: '45ch' }}>
                A front-end car detailers website. My focus was on a polished, modern layout with smooth
                animations and an emphasis on clarity in content
              </p>
              <div
                style={{
                  display: 'flex',
                  gap: '1rem',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                }}
              >
                <a
                  style={{}}
                  href='https://car-detailing-d6e9a.web.app/'
                  className='btn btn-primary'
                  target='_blank'
                >
                  Dire Ride
                </a>
                <a
                  target='_blank'
                  href='https://github.com/MJ-Developer201/dire-ride'
                  className='btn btn-primary'
                >
                  Github
                </a>
              </div>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-evenly',
              paddingTop: '1rem',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <AiFillHtml5 fontSize={'2.3rem'} color='rgb(228,77,38)' />
              <p style={{ fontSize: '0.7rem' }}>Html</p>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <BiLogoCss3 fontSize={'2.3rem'} color='rgb(33,76,229)' />
              <p style={{ fontSize: '0.7rem' }}>Css</p>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <DiJavascript fontSize={'2.3rem'} color='rgb(240,220,78)' />
              <p style={{ fontSize: '0.7rem' }}>Javascript</p>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <BiLogoReact fontSize={'2.3rem'} color='rgb(97,218,251)' />
              <p style={{ fontSize: '0.7rem' }}>React</p>
            </div>
          </div>
        </div>
        <div>
          <div className='card'>
            <img
              className='card-img-top'
              src='/landing-page.png'
              style={{ maxHeight: '272px', maxWidth: 'auto' }}
              alt=''
            />
            <div style={{}} className='card-body'>
              <h5 className='card-title'>Nex Connect</h5>
              <p className='card-text' style={{ maxWidth: '37ch' }}>
                A social media platform where you can create post, like & comment .Create your Profile &
                upload photos .Make new friends, post memories, and discover new horizons.
              </p>
              <div className='' style={{ display: 'flex', gap: '1rem' }}>
                <a style={{}} href='https://nexconnet.com/' className='btn btn-primary' target='_blank'>
                  Live Site
                </a>
                <a href='#' className='btn btn-primary' style={{ backgroundColor: '' }}>
                  Github
                </a>
              </div>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-evenly',
              paddingTop: '1rem',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <AiFillHtml5 fontSize={'2.3rem'} color='rgb(228,77,38)' />
              <p style={{ fontSize: '0.7rem' }}>Html</p>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <BiLogoCss3 fontSize={'2.3rem'} color='rgb(33,76,229)' />
              <p style={{ fontSize: '0.7rem' }}>Css</p>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <DiJavascript fontSize={'2.3rem'} color='rgb(240,220,78)' />
              <p style={{ fontSize: '0.7rem' }}>Javascript</p>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <BiLogoReact fontSize={'2.3rem'} color='rgb(97,218,251)' />
              <p style={{ fontSize: '0.7rem' }}>React</p>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <BiLogoMongodb fontSize={'2.3rem'} color='rgb(84,179,69)' />
              <p style={{ fontSize: '0.7rem' }}>MongoDb</p>
            </div>
          </div>
        </div>
        <div>
          <div className='card'>
            <img
              className='card-img-top'
              src='/azura-nav.png'
              style={{ maxHeight: '272px', maxWidth: 'auto' }}
              alt=''
            />
            <div className='card-body'>
              <h5 className='card-title'>Azura Art </h5>
              <p className='card-text' style={{ maxWidth: '45ch' }}>
                A sophisticated art gallery website, where I've constructed an array of captivating artworks,
                showcasing my ability to blend design and coding .
              </p>
              <div
                style={{
                  display: 'flex',
                  gap: '1rem',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                }}
              >
                <a style={{}} href='https://azura-art.com/' className='btn btn-primary' target='_blank'>
                  Live Site
                </a>
                <a href='#' className='btn btn-primary'>
                  Github
                </a>
              </div>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-evenly',
              paddingTop: '1rem',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <AiFillHtml5 fontSize={'2.3rem'} color='rgb(228,77,38)' />
              <p style={{ fontSize: '0.7rem' }}>Html</p>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <BiLogoCss3 fontSize={'2.3rem'} color='rgb(33,76,229)' />
              <p style={{ fontSize: '0.7rem' }}>Css</p>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <DiJavascript fontSize={'2.3rem'} color='rgb(240,220,78)' />
              <p style={{ fontSize: '0.7rem' }}>Javascript</p>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <BiLogoReact fontSize={'2.3rem'} color='rgb(97,218,251)' />
              <p style={{ fontSize: '0.7rem' }}>React</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
