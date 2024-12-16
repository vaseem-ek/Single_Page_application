import React from 'react'
import { Link } from 'react-router-dom'

function About() {
    return (
        <div className='d-flex flex-column justify-content-center align-items-center' style={{ height: "100vh" }}>
            <h1>ABOUT</h1>
          <div className='d-flex'>
          <Link to={'/'} className='btn btn-danger p-4 me-3'>
                GO TO HOME
            </Link>
            <Link to={'/cnt'} className='btn btn-success p-4'>
                GO TO contact
            </Link>
          </div>
        </div>
    )
}

export default About
