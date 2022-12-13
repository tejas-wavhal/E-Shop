import React from 'react'
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className='container mt-5' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <h1 style={{ fontSize: '5rem' }}>404</h1>
            <h1>YOUE HAVE LOST !</h1>
            <h2>This Page does not exists</h2>
            <h3>Would you like to return Home ?</h3>
            <Link to="/">
                <button type="button" className="btn btn-primary">Home</button>
            </Link>
        </div>
    )
}

export default ErrorPage