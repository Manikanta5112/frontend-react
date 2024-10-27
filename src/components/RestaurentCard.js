import { LOGO_URL } from "../utils/constants";

// we can pass props or
// destructuring ({resName, cuisine}) => {}
const RestaurentCard = ({resData,index}) => {
    const {name: resName, cuisines, costForTwo, deliveryTime, avgRating} =  resData
    console.log(resData)
    console.log(`this is index ${index}`)
        return (
            <div className="res-card" style={{ backgroundColor: "#f0f0f0"}}>
                <img
                    className="res-logo"
                    alt="res-logo"
                    src={LOGO_URL}
                ></img>
                <h3>{resName}</h3>
                <h4>{cuisines.join(", ")}</h4>
                <h4>{avgRating + " Stars"}</h4>
                <h4>{costForTwo}</h4>
                <h4>{deliveryTime+" minutes"}</h4>
            </div>
        )
    };

export default RestaurentCard;