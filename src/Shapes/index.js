import {string , number, bool, oneOf, shape} from 'prop-types'
import data from '../data'
export const ProductoShape = shape({
 precio: number.isRequired,
 nombre: string.isRequired
})