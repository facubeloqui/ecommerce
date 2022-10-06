import logo from './logo.svg';
import './App.css';
import { useParams } from 'react-router-dom';
import Topbar from './Components/Topbar';
import Navbar from './Components/Navbar';
import Featured from './Components/Featured';
import Categories from './Components/Categories';
import Offer from './Components/Offer';
import Card from './Components/Card';
import MapeoCards from './Components/MapeoCards';
import CarritoProvider from './Context/CarritoContext';
import Index from './Pages/index'
import Cart from './Pages/Cart';
import Detalle from './Pages/Detalle';
import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {
  return (
    <CarritoProvider>
    <BrowserRouter>

    <Routes>
    <Route path="/" element={<Index />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/detalle/:id" element={<Detalle />} />
    {/*<Route path="/:id" children={<Child />} /> */}
    </Routes>
    
    
    </BrowserRouter>
    </CarritoProvider>
  );

  function Child() {
    // We can use the `useParams` hook here to access
    // the dynamic pieces of the URL.
    let { id } = useParams();
  
    return (
      <div>
        <h3>ID: {id}</h3>
      </div>
    );
  }
}

export default App;
