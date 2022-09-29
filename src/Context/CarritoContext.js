import React,{createContext,useState} from 'react';

export const CarritoContext = createContext();

const CarritoProvider = (props) => {

    const [carrito, setCarrito] = useState([]);

    function eliminarCarrito (item) {
        // let carritoUpdated = []
        const items = carrito
        console.log(items)
        const valueToRemove = item
        const filteredItems = items.filter(item => item !== valueToRemove)
        // ["a", "b", "d", "e", "f"]
    console.log(filteredItems)
    setCarrito(filteredItems)
}
    return (
        <CarritoContext.Provider
            value={{
                setCarrito,
                carrito,
                eliminarCarrito
            }}
        >
            {props.children}
        </CarritoContext.Provider>
    )
}

export default CarritoProvider;