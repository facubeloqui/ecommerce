import React,{createContext,useState, useEffect} from 'react';

export const CarritoContext = createContext();

const CarritoProvider = (props) => {

    const [carrito, setCarrito] = useState([]);
    const [carritoID, setCarritoID] = useState([]);

    useEffect(() => {  
        if(carrito.length > 0)
        localStorage.setItem('carrito', JSON.stringify(carrito))
        console.log(carrito)
    }, [carrito])
    
    useEffect(() => {
        const carrito = JSON.parse(localStorage.getItem('carrito'));
        setCarrito(carrito);
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

    function agregarCarrito(producto) {
        const idArray = carrito.map((producto)=>producto.id)
        if(!idArray.includes(producto.id)){
            setCarrito([...carrito, producto])
        }
    }

    return (
        <CarritoContext.Provider
            value={{
                setCarrito,
                carrito,
                eliminarCarrito,
                carritoID,
                setCarritoID,
                agregarCarrito
            }}
        >
            {props.children}
        </CarritoContext.Provider>
    )
}

export default CarritoProvider;