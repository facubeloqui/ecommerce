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

function App() {
  return (
    <>
    <CarritoProvider>
    <Topbar/>
    <Navbar/>
    <Featured/>
    <Categories/>
    <Offer/>
    <div className="text-center mb-4">
            <h2 className="section-title px-5"><span className="px-2">Trandy Products</span></h2>
    </div>
    
    <MapeoCards/>
    </CarritoProvider>
    </>
  );
}

export default App;
