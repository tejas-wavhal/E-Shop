import React from 'react'
import { useProductContext } from '../context/contextStore'
import { Link } from 'react-router-dom'
import Product from './Product'
import { useFilteredData } from '../context/filterContext'
import FilterSection from './FilterSection'

const Products = () => {
  const { loading } = useProductContext()
  const { filteredData, handleOnSort } = useFilteredData()

  if (loading) {
    return (
      <div style={{height:'100vh'}}>
        <div className="spinner-border container" style={{ width: '3rem', height: '3rem', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop:'200px'}} role="status">
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
          <li className="breadcrumb-item active" aria-current="page">Products</li>
        </ol>
      </nav>
      <div className='container my-4'>
        <h1 className='text-center my-5'>Products</h1>
        <div className='flex'>
          <div className='filter-data'>
            <FilterSection />
          </div>
          <div className="products">
            <div style={{ display: 'grid', placeItems: 'center', marginBottom: '10px' }}>
              <form action="#">
                <select className="form-select text-center" aria-label="Default select example" style={{ cursor: 'pointer', width: '170px' }} onClick={handleOnSort}>
                  <option value="Highest">Highest (price)</option>
                  <option value="Lowest">Lowest (price)</option>
                  <option value="A-Z">A-Z (products)</option>
                  <option value="Z-A">Z-A (products)</option>
                </select>
              </form>
            </div>

            <p className='text-center' style={{ color: filteredData.length === 0 ? `red` : null }}>{filteredData.length === 0 ? `No Products Available` : `Total Products: ${filteredData.length}`}</p>

            <div className="row row-cols-1 row-cols-md-3 g-4" >
              {filteredData.map((element) => {
                return <Product {...element} key={element.id} />
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Products