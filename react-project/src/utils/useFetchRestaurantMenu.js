import { useEffect, useState } from "react";
import { RESTAURANT_ID_URL } from "./constant";

const UseFetchRestaurantMenu = (resId)=>{
    let [menuInfo, setmenuInfo] = useState({});
    let [resName, setResName] = useState("");
    useEffect(()=>{
        fetchData();
    },[]);
    const fetchData = async ()=>{
        let data = await fetch(RESTAURANT_ID_URL+ resId);
        const json = await data.json();
        // let info = json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards;
        let info = json.data;
        if(info){
            setmenuInfo(info);
        }
        setResName(json.data.cards[0].card.card.info.name);
    }
    return menuInfo;
}

export default UseFetchRestaurantMenu;