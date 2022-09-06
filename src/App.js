import logo from './logo.svg';
import './App.css';
import Topbar from './Components/Topbar';
import Navbar from './Components/Navbar';
import Featured from './Components/Featured';
import Categories from './Components/Categories';
import Offer from './Components/Offer';
import Card from './Components/Card';

function App() {
  return (
    <>
    <Topbar/>
    <Navbar/>
    <Featured/>
    <Categories/>
    <Offer/>
    <Card/>
    </>
  );
}

export default App;
