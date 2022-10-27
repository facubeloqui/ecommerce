import React, { Component } from 'react'
import logo from '../logo.svg';
import Topbar from '../Components/Topbar';
import Navbar from '../Components/Navbar';
import Featured from '../Components/Featured';
import Categories from '../Components/Categories';
import Offer from '../Components/Offer';
import Card from '../Components/Card';
import MapeoCards from '../Components/MapeoCards';
import data from '../data';
import SearchBar from '../Components/SearchBar';
export const Index = () => {
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
    <SearchBar/>
    <MapeoCards/>
    
</>

    )
}

export default Index