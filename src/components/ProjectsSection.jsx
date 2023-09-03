import { green } from '@mui/material/colors'
import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub'
import { AiFillHtml5, AiFillReconciliation } from 'react-icons/ai'
import { FaCoffee } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { BiLogoCss3, BiLogoJavascript, BiLogoMongodb } from 'react-icons/bi'
import { BiLogoReact } from 'react-icons/bi'
import { BiSolidFileCss } from 'react-icons/bi'
import { FaNodeJs } from 'react-icons/fa'
import { BiLogoFirebase } from 'react-icons/bi'
import { BiLogoPostgresql } from 'react-icons/bi'
import { DiJavascript } from 'react-icons/di'

export default function ProjectsSection() {
  return (
    <>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(246, 246, 246, 1)',
          paddingTop: '2rem',
        }}
      >
        <h2 style={{ color: 'black' }}>Skills</h2>
      </div>
      <div
        style={{
          padding: '2.5rem',
          backgroundColor: 'rgba(246, 246, 246, 1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            display: 'flex',
            gap: '6rem',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'black',
            flexWrap: 'wrap',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              gap: '0.5rem',
            }}
          >
            <AiFillHtml5 color='rgb(228,77,38)' fontSize={'3rem'} />
            <h6>HTML</h6>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              gap: '0.5rem',
            }}
          >
            <BiLogoCss3 color='rgb(33,76,229)' fontSize={'3rem'} />
            <h6
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                gap: '0.5rem',
              }}
            >
              CSS
            </h6>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              gap: '0.5rem',
            }}
          >
            <DiJavascript color='rgb(240,220,78)' fontSize={'3rem'} />
            <h6>JavaScript</h6>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              gap: '0.5rem',
            }}
          >
            <BiLogoReact color='rgb(97,218,251)' fontSize={'3rem'} />
            <h6>React</h6>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              gap: '0.5rem',
            }}
          >
            <FaNodeJs color='rgb(120,177,98)' fontSize={'3rem'} />
            <h6>Node.js</h6>
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              gap: '0.7rem',
            }}
          >
            <BiLogoFirebase color='rgb(255,204,42)' fontSize={'3rem'} />
            <h6>Firebase</h6>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              gap: '0.7rem',
            }}
          >
            <BiLogoPostgresql color='rgb(48,103,146)' fontSize={'3rem'} />
            <h6>SQL</h6>
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              gap: '0.7rem',
            }}
          >
            <BiLogoMongodb color='rgb(84,179,69)' fontSize={'3rem'} />
            <h6>MongoDb</h6>
          </div>
        </div>
      </div>
    </>
  )
}
