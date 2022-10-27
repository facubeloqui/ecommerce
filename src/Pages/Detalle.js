import React, {useState, useContext} from 'react'
import { useParams } from 'react-router-dom'
import PropTypes from 'prop-types'
import Card from '../Components/Card'
import data from '../data'
import { Button } from '@mui/material'
import { CarritoContext } from '../Context/CarritoContext'
import Loader from '../Components/Items/Loader'
export default function Detalle({ producto }) {
  const { id } = useParams()
  console.log(id);
  const prodFiltrado = data.filter(product => product.id === parseInt(id))[0]

  const sleep = ms => new Promise(
    resolve => setTimeout(resolve, ms)
  );
const [loading, setLoading] = useState(false)
const [agregado, setAgregado] = useState(false)
const {carrito, setCarrito, eliminarCarrito} = useContext(CarritoContext)
// const [descuento,setDescuento ]= useState(1 + producto.descuento)

async function handleEliminarCarrito(){
    console.log("eliminado")
    setLoading(true)
    eliminarCarrito(producto)
    setLoading(false)
    
}

async function handleAgregarCarrito () {
    console.log(carrito)
    let carritoPush = carrito
    carritoPush.push(prodFiltrado)
    setCarrito(carritoPush)
    setLoading(true)
    await sleep(1000);
    setLoading(false)
    if (agregado == false) {
      setAgregado(true)
    }
}
  return (
    <>
      <div className="card-header product-img position-relative overflow-hproductoden bg-transparent border p-5">
        <div className='row'>
          <div className='sm-12'>
            <img className="img-fluproducto w-100" src={prodFiltrado.img} alt="" width="300" height="700" />
          </div>
          <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
            <h6 className="text-truncate mb-3"></h6>
            <div className="d-flex justify-content-center">
              <h6></h6><h6 className="text-muted ml-2"><del></del></h6>
              <h2>{prodFiltrado.nombre}</h2>
            </div>
            <h4>${prodFiltrado.precio}</h4>
            <h6>Detalle: {prodFiltrado.detalle}</h6>
            {loading ? <Loader/> : (<> {agregado ? (<> <Button variant="contained" color="success">
     <a className="btn btn-sm text-dark p-0" onClick={handleAgregarCarrito}><i className="fas fa-shopping-cart text-primary mr-1"></i>+ 1</a>
             </Button></>) : (<> <Button variant="contained" color="success">
     <a className="btn btn-sm text-dark p-0" onClick={handleAgregarCarrito}><i className="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
             </Button></>)}</>) }
            
             
           
          </div>
        </div>
        
      </div>

    </>
  )
}
Card.propTypes = {
  prodFiltrado: PropTypes.shape ({
      nombre : PropTypes.string,
      precio: PropTypes.number,
      descuento : PropTypes.number,
      img : PropTypes.string,
      detalle : PropTypes.string,
      inCart : PropTypes.bool,
      id: PropTypes.number
  })
  }
