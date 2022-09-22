import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import data from '../data';
import { Link } from 'react-router-dom';
import { CarritoContext } from '../Context/CarritoContext';
function Card ({producto}) {
    const {carrito, setCarrito} = useContext(CarritoContext)

    function handleAgregarCarrito () {
        console.log(carrito)
let carritoPush = carrito
carritoPush.push(producto)
setCarrito(carritoPush)
    }
  return (
    <>
    <div>


         <div className="pb-1">
                <div className="card product-item border-0 mb-4">
                    <div className="card-header product-img position-relative overflow-hproductoden bg-transparent border p-0">
                        <img className="img-fluproducto w-100" src={producto.img} alt=""/>
                    </div>
                    <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                        <h6 className="text-truncate mb-3">{producto.nombre}</h6>
                        <div className="d-flex justify-content-center">
                            <h6>${producto.precio}</h6><h6 className="text-muted ml-2"><del>${producto.precio * 1.25}</del></h6>
                        </div>
                    </div>
                    <div className="card-footer d-flex justify-content-between bg-light border">
                        <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1"></i>View Detail</a>
                        <a className="btn btn-sm text-dark p-0" onClick={handleAgregarCarrito}><i className="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
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
    img : PropTypes.string

})
}
export default Card;
