import React from 'react'
import { useContext, useEffect } from 'react'
import Carrito from '../Components/Carrito'
import { CarritoContext } from '../Context/CarritoContext'
export default function Cart() {
    const {carrito} = useContext(CarritoContext)
  return (
    <>
    <i className="fas fa-shopping-cart text-primary"></i> ({carrito.length}): 
    <Carrito/>

    </>
  )
}
