import React from "react";

import { createRoot } from 'react-dom/client';


const Header =() => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://www.shutterstock.com/image-vector/food-finder-app-logo-design-260nw-1328492696.jpg"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
};

const RestaurantCard = (props) =>{
    return (
        <div className="res-card" style={{ backgroundColor:"#f0f0f0"}}>
            <img className="res-logo"
             alt="res-logo"
            src="https://img.freepik.com/premium-photo/chicken-biryani-kerala-style-chicken-dhum-biriyani-made-using-jeera-rice-spices-arranged_667286-4606.jpg"/>
<h3>{props.resName}</h3>
<h4>{props.cuisine}</h4>
        </div>
    );
};

const Body =()=>{
    return (
        <div className="body">
            <div className="Search">Search</div>
            <div className="res-container">
                <RestaurantCard
                resName="Pind Punjab"
                cuisine="Biriyani, North Indian"/>
                <RestaurantCard
                resName="KFC"
                cuisine="Fried Chciken"/>
              
            </div>
            </div>
    );
};

const AppLayout =()=>{
    return(
    <div className="app">
        <Header/>
        <Body/>
        </div>
    );
};

const root= createRoot(document.getElementById("root"));
root.render(<AppLayout/>);