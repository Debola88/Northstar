import React from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../contexts/CartContext';
import { useContext } from 'react'


const OrderSummary = () => {
    const navigate = useNavigate()

    return (
        <>
            <div>Order confirmed!</div>
            <button onClick={() => navigate(-3)}>Go back</button>
        </>
    )
}

export default OrderSummary