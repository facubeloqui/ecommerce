import React from 'react'
import Card from './Card'
import data from '../data'
import PropTypes from 'prop-types'


export default function MapeoCards() {

    return (
        <div className='row' id='Cards'>
            {
                    data.map(function(i, idx) {
                    return (
                        <div className='col-3'>
                            <Card key={i} producto={i} inCart={false}/>                    
                        </div>
                    )
                })
            }
        </div>
    )

}
MapeoCards.propTypes = {
    array: PropTypes.arrayOf (PropTypes.shape ({
        nombre : PropTypes.string,
        precio: PropTypes.number,
        descuento : PropTypes.number,
        img : PropTypes.string,
        detalle : PropTypes.string,
        carrito : PropTypes.bool
    
    }))
    }
