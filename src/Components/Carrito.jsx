import React from 'react'
import { useContext } from 'react'
import { CarritoContext } from '../Context/CarritoContext'
import Card from './Card'

export default function Carrito() {
  const {carrito, setCarrito} = useContext(CarritoContext)
  console.log(carrito)
  return (
    <div className='row'>
    {
            carrito.map(function(i, idx) {              
            return (
              
                <div className='col-3'>
                   <Card key={i} producto={i.producto} cantidad={i.cant} inCart={true}/>
                </div>
            )
        })
    }
</div>
  )
}
