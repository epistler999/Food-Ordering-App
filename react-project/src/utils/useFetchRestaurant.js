import { useEffect, useState } from "react";
import { RESTAURANT_URL } from "./constant";

const UseFetchRestaurant = ()=>{
    let [resInfo, setResInfo] = useState([]);
    useEffect(()=>{
        fetchData();
    },[])
    const fetchData = async ()=>{
        let data = await fetch(RESTAURANT_URL);
        const json = await data.json();
        let resData = json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
        setResInfo(resData);
    }
    return resInfo;
};

export default UseFetchRestaurant;