import React from 'react'
import Card from '../Components/Card'
export default function Detalle() {
  return (
    <>
    <div className="card-header product-img position-relative overflow-hproductoden bg-transparent border p-5">
      <div className='row'>
        <div className='sm-12'>
                        <img className="img-fluproducto w-100" src="img/product-1.jpg" alt="" width="300" height="700"/>
                    </div>
                    <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                        <h6 className="text-truncate mb-3"></h6>
                        <div className="d-flex justify-content-center">
                            <h6></h6><h6 className="text-muted ml-2"><del></del></h6>
                            <h2>Nombre del producto:</h2> 
                        </div>
                        <h4>Precio:</h4>
                        <h6>Detalle:</h6>
                    </div>
          </div>           
        </div>
        
    </>
  )
}
