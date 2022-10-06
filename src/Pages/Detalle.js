import React from 'react'
import { useParams } from 'react-router-dom'
import Card from '../Components/Card'
import data from '../data'

export default function Detalle({producto}) {
  const {id} = useParams()
  console.log(id);
  const prodFiltrado = data.filter(product => product.id === parseInt(id))[0]
  
  return (
    <>
    <div className="card-header product-img position-relative overflow-hproductoden bg-transparent border p-5">
      <div className='row'>
        <div className='sm-12'>
                        <img className="img-fluproducto w-100" src={prodFiltrado.img} alt="" width="300" height="700"/>
                    </div>
                    <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                        <h6 className="text-truncate mb-3"></h6>
                        <div className="d-flex justify-content-center">
                            <h6></h6><h6 className="text-muted ml-2"><del></del></h6>
                            <h2>{prodFiltrado.nombre}</h2> 
                        </div>
                        <h4>${prodFiltrado.precio}</h4>
                        <h6>Detalle:</h6>
                    </div>
          </div>        
          <a className="btn btn-sm text-dark p-0" ><i className="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>   
        </div>
        
    </>
  )
}
