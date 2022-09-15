import React from 'react'
import Card from './Card'
import data from '../data'


export default function MapeoCards() {

    return (
        <>
            {
                    data.map(function(i) {
                    return (<Card key={i} id={i}/>)
                })
            }
        </>
    )
 
}
