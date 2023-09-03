import React from 'react'
import '../css/footerStyles.css'
import { Form, Button } from 'react-bootstrap'

export default function MaterialFooter() {
  return (
    <div
      id='contact-section'
      style={{
        color: 'rgb(61, 61, 61)',
        textShadow: '0 2px 3px rgba(0, 0, 0, 0.2)',
        display: 'grid',
        gridTemplateColumns: '1fr 40%',
        backgroundColor: 'rgba(246, 246, 246, 1)',
        padding: '2.2rem',
        justifyContent: 'center',
      }}
    >
      <div className='form-section' style={{ color: 'black', padding: '3rem', order: '1' }}>
        <Form>
          <Form.Group className='mb-3'>
            <Form.Label>Your Name</Form.Label>
            <Form.Control type='text' />
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label>Your Email</Form.Label>
            <Form.Control type='email' />
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label>Message</Form.Label>
            <Form.Control style={{ resize: 'none' }} as='textarea' rows={4} />
          </Form.Group>
          <Button variant='primary' type='submit'>
            Send
          </Button>
        </Form>
      </div>
      <div
        className='contact-me-section'
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          order: '2',
        }}
      >
        <h2 style={{ marginBottom: '2rem' }}>Contact Me</h2>
        <h6>marc.dev201@gmail.com</h6>
      </div>
    </div>
  )
}
