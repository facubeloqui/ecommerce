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
        const filteredItems = items.filter(item => item.producto !== valueToRemove)
        // ["a", "b", "d", "e", "f"]
    console.log(filteredItems)
    setCarrito(filteredItems)
    }

    function agregarCarrito(producto) {
        const idArray = carrito.map((item)=>item.producto.id)
        if(!idArray.includes(producto.id)){
            setCarrito([...carrito, {producto,cant:1}])
        }else{
           carrito.map(function(item){
            if(item.producto.id === producto.id){
                
                item.cant = item.cant + 1
            }
           })


        } 
    }
    function sumarProducto(id){

        // carrito.map(function(item){
        //     if(item.producto.id === id){
                
        //         item.cant = item.cant + 1
        //         localStorage.setItem('carrito', JSON.stringify(carrito))
        //     }
        //    })

        let temp = carrito
        temp.map(function(item){
            if(item.producto.id === id) item.cant = item.cant + 1
           })
        
        setCarrito(temp)
           localStorage.setItem('carrito', JSON.stringify(temp))
    }
    function restarProducto(id){
        carrito.map(function(item){
            if(item.producto.id === id){
                
                item.cant = item.cant - 1
                localStorage.setItem('carrito', JSON.stringify(carrito))
            }
           })
    }

    return (
        <CarritoContext.Provider
            value={{
                setCarrito,
                carrito,
                eliminarCarrito,
                carritoID,
                setCarritoID,
                agregarCarrito,
                sumarProducto,
                restarProducto
            }}
        >
            {props.children}
        </CarritoContext.Provider>
    )
}

export default CarritoProvider;