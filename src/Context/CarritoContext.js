import React,{createContext,useState, useEffect} from 'react';

export const CarritoContext = createContext();

const CarritoProvider = (props) => {

    const [carrito, setCarrito] = useState([]);

    useEffect(() => {  
        localStorage.setItem('carrito', JSON.stringify(carrito))
        console.log(carrito)
    }, [carrito])
    
    useEffect(() => {
        const carrito = JSON.parse(localStorage.getItem('carrito'));
        if (carrito) {
            setCarrito(carrito);
           }
    },[])
    
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