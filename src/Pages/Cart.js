import React from 'react'
import { useContext, useEffect } from 'react'
import Carrito from '../Components/Carrito'
import { CarritoContext } from '../Context/CarritoContext'
export default function Cart() {
  const {carrito} = useContext(CarritoContext)
  return (
    <>
    <div className="col-lg-3 col-6 text-left">       
      <i className="fas fa-heart text-primary"></i>
      <span className="badge">0</span>
      <i className="fas fa-shopping-cart text-primary"></i>
      <span className="badge">{carrito.length}</span>
    </div>
    <Carrito/>
    </>
  )
}
