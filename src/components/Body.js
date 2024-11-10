import RestaurentCard from "./RestaurentCard"
import { useState, useEffect } from "react";

import { resList } from "../utils/constants";


const Body = () => {
    
    //Local State Variable - Super powerful variable
    // scope is inside the component
    // useState(defaultValue)
    // listOfRestaurants = [] // will not work
    // setListOfRestaurants - used to update
    const [listOfRestaurants, setListOfRestaurants] = useState([]); // it returns as a list, and we are assiging to a empty list to the variable 
    

    // Normal JS Variable
    //let listOfRestaurantsJS = [
        
    //];

    // arg1 - callback function
    // arg2 - array
    // this callback function is called after the component renders
    useEffect( () =>{
        console.log("use effect called")
        fetchData();
    }, []);

    const fetchData = async() => {
        const data = await fetch(
            "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null",
        ); // fetch (has a super power) is a function given by java script enginer

        const json = await data.json();
        console.log("here in fetchData")
        console.log(json?.data?.cards)
        // optional chaining
        setListOfRestaurants(json?.data?.cards)
    }

    if (listOfRestaurants.length == 0) {
        return (<h1>Loading...</h1>)
    }


    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" 
                onClick={ () => {
                    const filteredRestaurant = listOfRestaurants.filter(
                        (data) => data?.card?.card?.info?.avgRating > 4.5
                    );
                    setListOfRestaurants(filteredRestaurant)
                    console.log(filteredRestaurant)
                }
                
            }
                >Top Rated Restaurants</button>
            </div>
            <div className="res-container">
               { 
                listOfRestaurants.map((data,index) => {
                    const name = data?.card?.card?.info?.name

                    if (name && name.trim() !== "") {
                        return (
                            <RestaurentCard
                        resData={{
                            name: data?.card?.card?.info?.name, 
                            cuisines:data?.card?.card?.info?.cuisines, 
                            costForTwo: data?.card?.card?.info?.costForTwo, 
                            deliveryTime:data?.card?.card?.info?.sla?.slaString, 
                            avgRating: data?.card?.card?.info?.avgRating,
                            cloudinaryImageId: data?.card?.card?.info?.cloudinaryImageId,
                        }}
                        key={index}
                        index={index}
                    /> 
                        );
                    }else {
                        return null;
                    }
                }
                )
               }
            </div>

        </div>
    )
}

export default Body;