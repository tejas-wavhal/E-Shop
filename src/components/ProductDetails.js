import React, { useState, useEffect } from 'react'
import { useProductContext } from '../context/contextStore'
import './ProductDetails.css'
import { TbTruckDelivery, TbReplace } from 'react-icons/tb'
import { TiTick } from 'react-icons/ti'
import { AiOutlineFileProtect, AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'


const ProductDetails = () => {
  const { id } = useParams()
  const { updateProductDetails, productDetails, productDetailLoading } = useProductContext()
  const link = "https://api.pujakaitem.com/api/products"
  const { price, image = [{ url: "" }], colors = [] } = productDetails


  const [color, setColor] = useState(colors[0])
  useEffect(() => {
    setColor(colors[0])
  }, [colors])

  useEffect(() => {
    updateProductDetails(`${link}?id=${id}`)
    // eslint-disable-next-line
  }, [])

  const priceFormat = () => {
    return Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 2
    }).format(price / 100)
  }

  const [count, setCount] = useState(1)
  let handleOnPlusCount = () => {
    setCount(count + 1)
  }
  let handleOnMinusCount = () => {
    setCount(count === 1 ? 1 : count - 1)
  }
  if (productDetailLoading) {
    return (
      <div style={{ height: '100vh' }}>
        <div className="spinner-border container" style={{ width: '3rem', height: '3rem', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '200px' }} role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    )
  }
  return (
    <>
      <nav aria-label="breadcrumb" style={{ margin: '25px' }}>
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to="/">Home</Link></li>
          <li className="breadcrumb-item"><Link to="/products">Products</Link></li>
          <li className="breadcrumb-item active" aria-current="page">{productDetails.name}</li>
        </ol>
      </nav>
      <div className='wrap container my-5' >
        <div >
          <img src={image[0].url} alt="productImage" width="100%" />
        </div>
        <div>
          <div>
            <h1>{productDetails.name}</h1>
            <h2 className='price'>{priceFormat(price)}</h2>
            <p>{productDetails.description}</p>
            <dir className='svgItems'>
              <div className='svgItemsChild'>
                <TbTruckDelivery style={{ fontSize: '25px' }} />
                <p className='text-center' style={{ fontSize: 'small' }}>Fast Delivery</p>
              </div>
              <div className='svgItemsChild'>
                <TbReplace style={{ fontSize: '25px' }} />
                <p className='text-center' style={{ fontSize: 'small' }}>7 Days Replacement</p>
              </div>
              <div className='svgItemsChild'>
                <AiOutlineFileProtect style={{ fontSize: '25px' }} />
                <p className='text-center' style={{ fontSize: 'small' }}>1 Year Warranty</p>
              </div>
            </dir>
            <hr />
            <div>
              <p>Available: <b>In Stock</b></p>
              <p>ID: <b>{productDetails.id}</b></p>
              <p>Brand: <b>{productDetails.company}</b></p>
            </div>
            <hr />
            <div className='btns'>
              <button onClick={handleOnMinusCount}><AiOutlineMinusCircle /></button>
              <b>{count}</b>
              <button onClick={handleOnPlusCount}><AiOutlinePlusCircle /></button>
            </div>
            <div>
              {productDetails.stock >= 1 && colors.map((e, i) => {
                return <button
                  key={i}
                  className={color === e ? 'btnColors active' : 'btnColors'} style={{ backgroundColor: e }}
                  onClick={() => { setColor(e) }}
                > {color === e ? <TiTick className='tick' /> : null}
                </button>
              })
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductDetails