import React, { useContext, useState } from 'react'
import PropTypes from 'prop-types'
import data from '../data';
import { Link } from 'react-router-dom';
import { CarritoContext } from '../Context/CarritoContext';
import Loader from './Items/Loader';
import Button from '@mui/material/Button';
function Card ({producto,cantidad, inCart}) {

    const sleep = ms => new Promise(
        resolve => setTimeout(resolve, ms)
      );
    const [loading, setLoading] = useState(false)
    const {carrito, setCarrito, eliminarCarrito, carritoID, setCarritoID, agregarCarrito, sumarProducto, restarProducto} = useContext(CarritoContext)
// const [descuento,setDescuento ]= useState(1 + producto.descuento)

    async function handleEliminarCarrito(){
        console.log("eliminado")
        setLoading(true)
        eliminarCarrito(producto)
        setLoading(false)
        
    }

    async function handleAgregarCarrito () {
        console.log('Desde el card', carrito)
        console.log(carritoID)
        let carritoPush = carrito
        carritoPush.push(producto)
        setCarrito(carritoPush)
        let carritoIDPush = carritoID
        carritoIDPush.push(producto.id)
        setCarritoID(carritoIDPush)
        setLoading(true)
        await sleep(1000);
        setLoading(false)
    }
  return (
    <>
    <div>


         <div className="pb-1">
                <div className="card product-item border-0 mb-4">
                    <div className="card-header product-img position-relative overflow-hproductoden bg-transparent border p-5">
                        <img className="img-fluproducto w-100" src={producto.img} alt=""/>
                    </div>
                    <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                        <h6 className="text-truncate mb-3">{producto.nombre}{cantidad}</h6>
                        <div className="d-flex justify-content-center">
                          {producto.descuento == 0
                          ? <h6>${producto.precio}</h6>
                          :(<><h6>${producto.precio * cantidad}</h6><h6 className="text-muted ml-2"><del>${producto.precio * (1 + producto.descuento) * cantidad}</del></h6></>)
                          
                          }  
                        </div>
                    </div>

                    
                    <div className="card-footer d-flex justify-content-between bg-light border">

                        {inCart
                        ? <> { loading
                            ? <div className='CardIcon'> <Loader/></div>
                          : (<><Button variant="contained" onClick={() => restarProducto(producto.id)}>-</Button><div className='CardIcon' onClick={handleEliminarCarrito}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-recycle" viewBox="0 0 16 16">
                          <path d="M9.302 1.256a1.5 1.5 0 0 0-2.604 0l-1.704 2.98a.5.5 0 0 0 .869.497l1.703-2.981a.5.5 0 0 1 .868 0l2.54 4.444-1.256-.337a.5.5 0 1 0-.26.966l2.415.647a.5.5 0 0 0 .613-.353l.647-2.415a.5.5 0 1 0-.966-.259l-.333 1.242-2.532-4.431zM2.973 7.773l-1.255.337a.5.5 0 1 1-.26-.966l2.416-.647a.5.5 0 0 1 .612.353l.647 2.415a.5.5 0 0 1-.966.259l-.333-1.242-2.545 4.454a.5.5 0 0 0 .434.748H5a.5.5 0 0 1 0 1H1.723A1.5 1.5 0 0 1 .421 12.24l2.552-4.467zm10.89 1.463a.5.5 0 1 0-.868.496l1.716 3.004a.5.5 0 0 1-.434.748h-5.57l.647-.646a.5.5 0 1 0-.708-.707l-1.5 1.5a.498.498 0 0 0 0 .707l1.5 1.5a.5.5 0 1 0 .708-.707l-.647-.647h5.57a1.5 1.5 0 0 0 1.302-2.244l-1.716-3.004z"/>
                        </svg></div><Button variant="contained" onClick={() => sumarProducto(producto.id)}>+</Button></>)
                        }</>
                    
                    :( <> <Link to={`/detalle/${producto.id}`} params={{ producto: producto }}><a className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1"></i>View Detail</a></Link> 

                    {loading
                    ? <Loader/> : ( <a className="btn btn-sm text-dark p-0" onClick={() => {agregarCarrito(producto)}}><i className="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>)} </>)
                   }
                       
                       
                    </div>
                </div>
            </div>
    </div>
    
    </>
  )
}

Card.propTypes = {
producto: PropTypes.shape ({
    nombre : PropTypes.string,
    precio: PropTypes.number,
    descuento : PropTypes.number,
    img : PropTypes.string,
    detalle : PropTypes.string,
    inCart : PropTypes.bool,
    id: PropTypes.number
})
}
export default Card;
