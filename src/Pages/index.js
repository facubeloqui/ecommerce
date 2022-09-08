import React from 'react'
import logo from './logo.svg';
import './App.css';
import Topbar from './Components/Topbar';
import Navbar from './Components/Navbar';
import Featured from './Components/Featured';
import Categories from './Components/Categories';
import Offer from './Components/Offer';
import Card from './Components/Card';

export default function index() {
  return (
    <>
    <Topbar/>
    <Navbar/>
    <Featured/>
    <Categories/>
    <Offer/>
    <div class="text-center mb-4">
            <h2 class="section-title px-5"><span class="px-2">Trandy Products</span></h2>
    </div>
    <Card/>
    </>
  )
}
