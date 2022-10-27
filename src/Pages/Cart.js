import React from 'react'
import { useContext, useEffect } from 'react'
import Carrito from '../Components/Carrito'
import { CarritoContext } from '../Context/CarritoContext'
export default function Cart() {
  const {carrito} = useContext(CarritoContext)
  return (
    <>
    <div className="col-lg-3 col-6 text-left">       
    
      <i className="fas fa-shopping-cart text-primary"></i>
      <span className="badge">{carrito.length}</span>
      <h1>Carrito {carrito.length}</h1>
    </div>
    
    <Carrito/>
    </>
  )
}
