import logo from './logo.svg';
import './App.css';
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
    <Route path="/detalle" element={<Detalle />} />
    </Routes>
    </BrowserRouter>
    </CarritoProvider>
  );
}

export default App;
