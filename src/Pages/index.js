/* import React from 'react'
import logo from './logo.svg';
import './App.css';
import Topbar from './Components/Topbar';
import Navbar from './Components/Navbar';
import Featured from './Components/Featured';
import Categories from './Components/Categories';
import Offer from './Components/Offer';
import Card from './Components/Card';

export default function Index() {
  return (
    <>
    <Topbar/>
    <Navbar/>
    <Featured/>
    <Categories/>
    <Offer/>
    <div className="text-center mb-4">
            <h2 className="section-title px-5"><span className="px-2">Trandy Products</span></h2>
    </div>
    <Card/>
    </>
  )
}
 */



import React, { Component } from 'react'
import logo from '../logo.svg';
import Topbar from '../Components/Topbar';
import Navbar from '../Components/Navbar';
import Featured from '../Components/Featured';
import Categories from '../Components/Categories';
import Offer from '../Components/Offer';
import Card from '../Components/Card';
import data from '../data';
export class Index extends Component {
  render() {
    return (
<>

    <Topbar/>
    <Navbar/>
    <Featured/>
    <Categories/>
    <Offer/>
    <div className="text-center mb-4">
            <h2 className="section-title px-5"><span className="px-2">Trandy Products</span></h2>
    </div>
    <Card/>
    
</>

    )
  }
}

export default Index