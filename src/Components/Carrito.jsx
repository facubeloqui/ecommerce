import React from 'react'
import { useContext } from 'react'
import { CarritoContext } from '../Context/CarritoContext'
import Card from './Card'

export default function Carrito() {
  const {carrito, setCarrito} = useContext(CarritoContext)
  return (
    <div className='row'>
    {
            carrito.map(function(i, idx) {
              
            return (
                <div className='col-3'>
                   <Card key={i} producto={i} inCart={true}/>
                </div>
            )
        })
    }
</div>
  )
}
