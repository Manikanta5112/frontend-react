import RestaurentCard from "./RestaurentCard"
import { useState } from "react";

const restDataArray = new Array(30).fill(
    {
        resName: "KFC",
        cuisine: "Fast Food",
        stars: 4.5,
        price: 400,
    }
);

const Body = () => {
    
    //Local State Variable - Super powerful variable
    // scope is inside the component
    // useState(defaultValue)
    // listOfRestaurants = [] // will not work
    // setListOfRestaurants - used to update
    const [listOfRestaurants, setListOfRestaurants] = useState([
        {
            data: {
                id: "334475",
                name: "KFC",
                cloudinaryImageId: "bb",
                cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
                costForTwo: 40000,
                deliveryTime: 36,
                avgRating: "3.8",
            }
        },
        {
            data: {
                id: "334473",
                name: "Dominos",
                cloudinaryImageId: "bb",
                cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
                costForTwo: 40000,
                deliveryTime: 36,
                avgRating: "4.5",
            }
        },
        {
            data: {
                id: "334472",
                name: "McD",
                cloudinaryImageId: "bb",
                cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
                costForTwo: 40000,
                deliveryTime: 36,
                avgRating: "4.1",
            }
        }
    ]); // it returns as a list, and we are assiging to a empty list to the variable 
    

    // Normal JS Variable
    //let listOfRestaurantsJS = [
        
    //];


    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" 
                onClick={ () => {
                    const filteredRestaurant = listOfRestaurants.filter(
                        (res) => res.data.avgRating > 4
                    );
                    setListOfRestaurants(filteredRestaurant)
                    console.log(filteredRestaurant)
                }
                
            }
                >Top Rated Restaurants</button>
            </div>
            <div className="res-container">
               {
                listOfRestaurants.map((data,index) =>
                    <RestaurentCard
                        resData={data.data}
                        key={index}
                        index={index}
                    />
                )
               }
            </div>

        </div>
    )
}

export default Body;