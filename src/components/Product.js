import React from 'react'
import { Link } from 'react-router-dom'

const Product = (props) => {
    const { name, image, id, price } = props

    const priceFormat = () => {
        return Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "INR",
            maximumFractionDigits: 2
        }).format(price / 100)
    }

    return (
        <div>
            <div className="col" >
                <div className="card h-100" >
                    <img src={image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <h6 className="card-title">{priceFormat(price)}</h6>
                        <Link to={`/productDetails/${id}`}>
                            <button type="button" className="btn btn-primary btn-sm">View Products</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product