import React from 'react'
import '../App.css'
import { Link } from "react-router-dom";


const Slider = (props) => {
  return (
    <div className='slider container my-2' style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', padding: '1rem', borderRadius: '1rem' }}>
      <div className='p-4'>
        <h1>{props.title}</h1>
        <p>{props.discription}</p>
        <Link to="/contact">
          <button type="button" className="mx-2 btn btn-primary">Contact Us</button>
        </Link>
        <Link to="/products">
          <button type="button" className="mx-2 btn btn-primary">View Products</button>
        </Link>
      </div>
      <div id="carouselExampleIndicators" className="carousel slide " style={{ height: '50vh', width: '24rem' }} data-bs-ride="true">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/MacBook_Air_Apple_M1_deal_sale.jpg" className="d-block" style={{ height: '50vh' }} alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://image.made-in-china.com/2f0j00BFoTpjiqAGzm/Hot-Sale-Roex-Waterproof-High-Quality-Quartz-Watch.jpg" className="d-block" style={{ height: '50vh' }} alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://images.news18.com/ibnlive/uploads/2022/02/noise-smartwatch-india-16452056314x3.jpg" className="d-block" style={{ height: '50vh' }} alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}

export default Slider