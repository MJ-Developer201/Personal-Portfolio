import React from 'react'
import { AiFillLinkedin } from 'react-icons/ai'
import { BsGithub } from 'react-icons/bs'
import { IoMdDownload } from 'react-icons/io'
import '../css/socialLinks.css'
export default function SocialLinks() {
  return (
    <div
      style={{
        backgroundColor: 'white',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr ',
      }}
    >
      <div className='linkDIn' style={{ backgroundColor: 'rgb(10,102,194)', padding: '100px' }}>
        <AiFillLinkedin style={{ fontSize: '5rem' }} />
      </div>
      <div className='gitHub' style={{ backgroundColor: 'rgb(10,13,51)', padding: '100px' }}>
        <BsGithub className='github-img' style={{ fontSize: '5rem' }} />
      </div>
    </div>
  )
}
