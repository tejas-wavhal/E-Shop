import React from 'react'
import { useProductContext } from '../context/contextStore'
import Product from './Product'

const FeatureProducts = () => {
    const { featureProducts,loading } = useProductContext()
    if (loading) {
        return (
            <div style={{ height: '100vh' }}>
                <div className="spinner-border container" style={{ width: '3rem', height: '3rem', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '200px' }} role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }
    return (
        <div className='container my-5'>
            <h1 className='text-center'>Feature Products</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {featureProducts.map((element) => {
                    return <Product {...element} key={element.id} />
                })
                }
            </div>
        </div>
    )
}

export default FeatureProducts