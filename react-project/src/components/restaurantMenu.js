// import { useEffect, useState } from "react";
import { useParams } from "react-router";
// import { RESTAURANT_ID_URL } from "../utils/constant";
import Shimmer from "./shimmer";
import UseFetchRestaurantMenu from "../utils/useFetchRestaurantMenu";
import ItemCards from "./ItemCards";
import { useState } from "react";

const RestaurantMenu = ()=>{
    const {resId} = useParams();
    const [showIndex, setShowIndex] = useState(null);
    // let [resInfo, setResinfo] = useState([]);
    // let [resName, setResName] = useState("");

    // useEffect(()=>{
    //     fetchData();
    // },[]);

    // fetchData = async ()=>{
    //     let data = await fetch(RESTAURANT_ID_URL+ resId);
    //     const json = await data.json();
    //     let info = json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards;
    //     if(info && info.length){
    //         setResinfo(info);
    //     }
    //     setResName(json.data.cards[0].card.card.info.name);
    // }

    let data = UseFetchRestaurantMenu(resId);
    let resInfo = [];
    let filteredCard = [];
    let resName = "";
    if(JSON.stringify(data) !== '{}'){
        resInfo = data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards;
        resName = data.cards[0].card.card.info.name;
        let cards = data.cards[2].groupedCard.cardGroupMap.REGULAR.cards;
        filteredCard = cards.filter(res=>{
            if(res.card.card["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"){
                return res;
            }
        });
    }
    
    if(resInfo && resInfo.length===0){
        return (<Shimmer/>)
    }

    return (
        <div className="flex flex-col items-center w-12/12">
            <h1 className="font-bold m-4 text-2xl text-gray-700">{resName}</h1>
            {
                filteredCard.map((res, index)=>(
                    <ItemCards res={res} showIndex={index===showIndex && true}
                    setShowIndex = {()=> setShowIndex(index)} // its a callback fn passed
                    key = {index}
                    />
                ))
            }
        </div>
    )
};

export default RestaurantMenu;