import React from 'react'
import Card from './Card'
import data from '../data'


export default function MapeoCards() {

    return (
        <div className='row'>
            {
                    data.map(function(i, idx) {
                    return (
                        <div className='col-3'>
                            <Card key={i} producto={i}/>                    
                        </div>
                    )
                })
            }
        </div>
    )
 
}
