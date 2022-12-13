import React from 'react'
import FeatureProducts from './FeatureProducts'
import Slider from './Slider'

const Home = () => {
    let title = "Welcome to E-Shop"
    let discription = "Buy Electronic Products with Best Price and at Good Discount Price."

    return (
        <>
            <Slider title={title} discription={discription} />
            <FeatureProducts />
        </>
    )
}

export default Home