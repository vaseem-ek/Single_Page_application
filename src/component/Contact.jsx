import React from 'react'
import { Link } from 'react-router-dom'

function Contact() {
    return (
        <div className='d-flex flex-column justify-content-center align-items-center' style={{ height: "100vh" }}>
            <h1>Contact</h1>
            <Link to={'/abt'} className='btn btn-success p-4'>
                GO TO ABOUT
            </Link>
        </div>
    )
}

export default Contact
