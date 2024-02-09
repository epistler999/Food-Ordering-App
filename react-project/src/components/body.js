import { useState, useEffect, useContext } from "react";
import { RESTAURANT_URL } from "../utils/constant";
import Restaurant from "./restaurant";
import Shimmer from "./shimmer";
import UseFetchRestaurant from "../utils/useFetchRestaurant";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = ()=>{
    let [ FilteredRestaurantList, setFilteredRestaurantList ] = useState([]); // Filtered Data used for filtering and sorting
    // let [listOfRestaurant, setListOfRestaurant] = useState([]); // orginal Data
    let [searchText, setSearchText] = useState("");
    let listOfRestaurant = UseFetchRestaurant(); // hitting API and getting the restaurant data
    let status = useOnlineStatus();
    const {userName, setUserName } = useContext(UserContext);

    useEffect(()=>{
        // fetchData();
        setFilteredRestaurantList(listOfRestaurant);
    },[listOfRestaurant]);

  
    // let FilteredRestaurantList = JSON.parse(JSON.stringify(listOfRestaurant));

    // const fetchData = async ()=>{
    //     let data = await fetch(RESTAURANT_URL);
    //     const json = await data.json();
    //     let resData = json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
    //     setFilteredRestaurantList(data);
    //     setListOfRestaurant(data);
    // }

    const handleChange = (event)=>{
        const val = event.target.value;
        setSearchText(event.target.value);
        if(val.length>2){
            let filteredData = listOfRestaurant.filter(res=>{
                if(res.info.name.toLocaleLowerCase().includes(val.toLocaleLowerCase())){
                    return res;
                }
            });
            setFilteredRestaurantList(filteredData);
        } 
    }

    const search = ()=>{
        let filterData = listOfRestaurant.filter(res=>{
            if(res.info.name.toLowerCase().includes(searchText.toLowerCase())){
                return res;
            }
        });
        setFilteredRestaurantList(filterData);
    }

    if(!status){
        return <h1>Looks like you lost your internet. Please connect to internet</h1>;
    }

    if(!listOfRestaurant.length){
        return (<Shimmer/>);
    }

    return (
        <div className="body">
            <div className="filter flex text-center justify-center align-middle m-4 p-4">
                <input type="text" name="message" value={searchText} 
                        onChange={handleChange} 
                        className="search-box w-60 h-8 p-2 m-2 border border-solid border-black rounded-lg" />
                <button 
                    onClick={search} 
                    className="search-btn bg-slate-500 w-36 h-8 m-2 rounded-lg"
                    >
                    Search
                </button>
                <button 
                    onClick={()=>{
                    let filterData = listOfRestaurant.filter(res=> res.info.avgRating>4);
                    setFilteredRestaurantList(filterData);
                    }} className="filter-btn bg-slate-800 text-white h-8 m-2 px-2 rounded-lg"
                    >
                    Top Rated Restaurant
                </button>
                <label className="my-2 px-2">User Name: </label>
                <input value={userName} onChange={(e)=> setUserName(e.target.value)}
                        className="search-box w-60 h-8 p-2 my-2 border border-solid border-black rounded-lg" />
            </div>
            <div className="restaurant flex">
                <Restaurant listOfRestaurant={FilteredRestaurantList} />
            </div>
        </div>
    )
};

export default Body;