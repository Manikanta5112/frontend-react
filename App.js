import React from "react";
import ReactDOM from "react-dom/client";


/**
 * Header
 *  - Logo
 *  - Nav Items (Home, About)
 * Body
 *  - Search 
 *  - RestaurentContainer
 *      - RestairentCard
 *      - Img
 *      - Name of the restaurent
 *      - Star Rating, cuisine, delivery time
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 * 
 * 
 * 
 * 
 */

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"/>
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


const resObj = {
    resName: "KFC",
    cuisine: "Fast Food",
    stars: 4.5,
    price: 400,
}

const restDataArray = new Array(30).fill(
    {
        resName: "KFC",
        cuisine: "Fast Food",
        stars: 4.5,
        price: 400,
    }
);

// we can pass props or
// destructuring ({resName, cuisine}) => {}
const RestaurentCard = ({resData,index}) => {
   const {resName, cuisine} =  resData
   console.log(`this is index ${index}`)
    return (
        <div className="res-card" style={{ backgroundColor: "#f0f0f0"}}>
            <img
                className="res-logo"
                alt="res-logo"
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/e0vvulfbahjxjz6k4uwi"
            ></img>
            <h3>{resName}</h3>
            <h4>{cuisine}</h4>
            <h4>4.4 stars</h4>
            <h4>38 minutes</h4>
        </div>
    )
};

const Body = () => {
    return (
        <div className="body">
            <div className="search">
                Search
            </div>
            <div className="res-container">
               {
                restDataArray.map((data,index) =>
                    <RestaurentCard
                        resData={data}
                        key={index}
                        index={index}
                    />
                )
               }
            </div>

        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Body/>
            // Footer
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout/>)