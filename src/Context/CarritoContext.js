import React,{createContext,useState} from 'react';

export const CarritoContext = createContext();

const CarritoProvider = (props) => {

    const [carrito, setCarrito] = useState([]);

    return (
        <CarritoContext.Provider
            value={{
                setCarrito,
                carrito
            }}
        >
            {props.children}
        </CarritoContext.Provider>
    )
}

export default CarritoProvider;