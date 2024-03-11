import React from 'react'
import "./PropertyType.css"
import  h1 from "../../assets/images1/hero/h1.png"
import  h2 from "../../assets/images1/hero/h2.png"
import  h3 from "../../assets/images1/hero/h3.png"
import  h4 from "../../assets/images1/hero/h4.png"
import  h6 from "../../assets/images1/hero/h6.png"
const Property = () => {
  return (
    <div className='container'>
        <div className="grid">
            <div className="card">
                <img src={h1} alt="" />
                <p className='card-title'>Family House</p>
                <p className='card-description'>122 Propery</p>
            </div>
            <div className="card">
                <img src={h2} alt="" />
                <p className='card-title'>House & Vanilla</p>
                <p className='card-description'>155 Property</p>
            </div>
            <div className="card">
                <img src={h3} alt="" />
                <p className='card-title'>Apartment</p>
                <p className='card-description'>300 Property</p>
            </div>
            <div className="card">
                <img src={h4} alt="" />
                <p className='card-title'>Office & Studio</p>
                <p className='card-description'>80 Property</p>
            </div>
            <div className="card">
                <img src={h6} alt="" />
                <p className='card-title'>Villa & Condo</p>
                <p className='card-description'>80 Property</p>
            </div>
        </div>
    </div>
  )
}

export default Property