import React from 'react';
import './Card.css'
const Card = ({img,title,price,condition,shipping}) => {
    // console.log(producto.title)
    return(
        <div className='container-card'>
            <img src={img} alt="" />
            <div className='product-details'>
                <h6>{title}</h6>
                <p><span>Precio: {price}</span></p>
                <p><span>Condicion: {condition}</span></p>
                {shipping && <p className='free-shipping'>Free Shipping</p>}

            </div>
        </div>
    )
}

export { Card }