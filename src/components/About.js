import React from 'react'
import Slider from './Slider'
import './About.css'

const About = () => {
    let title = "About E-Shop"
    let discription = "E-Shop is a E-Commerce React Js Front-End Project made by Tejas Wavhal using an external API to display the products and its details where you can check the products and filter it by various options.\n This App is made using HTML, CSS, REACT JS, BOOTSTRAP. The State is handele using CONTEXT API, USE CONTEXT, USE REDUCER , USE EFFECT, USE STATE and other React Hooks."
    return (
        <div className='about' style={{ height: '82vh' }}>
            <Slider title={title} discription={discription} />
        </div>
    )
}

export default About