import { Link } from "react-router-dom";
import RestCard from "./restaurant-card";
import { HighRatedRestaurant } from "./restaurant-card";

const Restaurant = ({listOfRestaurant})=>{
    const HighRatedRes = HighRatedRestaurant(RestCard);
    console.log(listOfRestaurant);
    return (
        <div className="restaurant flex flex-wrap justify-center text-center">
            {
                listOfRestaurant.map(res=>(
                    <Link className="res-link" to={"/restaurant/"+ res.info.id} key={res.info.id}>
                        {
                            res.info.avgRating > 4 ? <HighRatedRes name={res.info.name} 
                            cousine={res.info.cuisines} 
                            rating={res.info.avgRating}
                            imageId = {res.info.cloudinaryImageId}
                            id = {res.info.id}
                            className="flex"/> 
                            : <RestCard 
                            name={res.info.name} 
                            cousine={res.info.cuisines} 
                            rating={res.info.avgRating}
                            imageId = {res.info.cloudinaryImageId}
                            id = {res.info.id}
                            className="flex"
                            />
                        }
                        {/* <RestCard 
                        name={res.info.name} 
                        cousine={res.info.cuisines} 
                        rating={res.info.avgRating}
                        imageId = {res.info.cloudinaryImageId}
                        id = {res.info.id}
                        className="flex"
                        /> */}
                    </Link> 
                ))
            }
        </div>
    )
}

export default Restaurant;