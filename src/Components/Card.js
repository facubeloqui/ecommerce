import React from 'react'
import PropTypes from 'prop-types'
import data from '../data';

function Card ({id}) {
console.log(id)
  return (
    <>
    <div>


         <div className="pb-1">
                <div className="card product-item border-0 mb-4">
                    <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                        <img className="img-fluid w-100" src={id.img} alt=""/>
                    </div>
                    <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                        <h6 className="text-truncate mb-3">{id.nombre}</h6>
                        <div className="d-flex justify-content-center">
                            <h6>${id.precio}</h6><h6 className="text-muted ml-2"><del>${id.precio * 1.25}</del></h6>
                        </div>
                    </div>
                    <div className="card-footer d-flex justify-content-between bg-light border">
                        <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1"></i>View Detail</a>
                        <a href="" className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
                    </div>
                </div>
            </div>
    </div>
    
    </>
  )
}
export default Card;
