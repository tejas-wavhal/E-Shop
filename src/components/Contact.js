import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {

    return (
        <div style={{ height: '79.5vh' }}>
            <nav aria-label="breadcrumb" style={{ margin: '25px' }}>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Contact</li>
                </ol>
            </nav>

            <div className='container mt-5'>
                <form action="https://formspree.io/f/xdojpgoo" method='POST'>
                    <h1 className='text-center'>Contact us</h1>
                    <div className="form-floating mb-3 mt-5">
                        <input type="email" className="form-control" id="floatingInput" required placeholder="name@example.com" name='Email' />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="password" className="form-control" id="floatingPassword" required placeholder="Password" autoComplete='off' name='Password' />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <div className="form-floating mb-3">
                        <textarea className="form-control" required placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: "100px" }} name='Message'></textarea>
                        <label htmlFor="floatingTextarea2">Message</label>
                    </div>
                    <input className="btn btn-primary" type="submit" value="Submit" />
                </form>
            </div>
        </div>
    )
}

export default Contact