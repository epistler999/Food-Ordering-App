// import { useEffect, useState } from "react";
import { useParams } from "react-router";
// import { RESTAURANT_ID_URL } from "../utils/constant";
import Shimmer from "./shimmer";
import useFetchRestaurantMenu from "../utils/useFetchRestaurantMenu";
import ItemCards from "./ItemCards";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [showIndex, setShowIndex] = useState(null);
  let data = useFetchRestaurantMenu(resId); // custom hook
  let resInfo = [];
  let filteredCard = [];
  let resName = "";
  if (JSON.stringify(data) !== "{}") {
    resInfo =
      data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
        .itemCards;
    resName = data.cards[0].card.card.info.name;
    filteredCard = data.cards[2].groupedCard.cardGroupMap.REGULAR.cards.filter(
      (res) => {
        if (
          res.card.card["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        ) {
          return res;
        }
      }
    );
  }

  if (resInfo && resInfo.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="flex flex-col items-center w-12/12">
      <h1 className="m-4 text-2xl font-bold text-gray-700">{resName}</h1>
      {filteredCard.map((res, index) => (
        // controlled component
        <ItemCards
          res={res}
          showIndex={index === showIndex && true}
          setShowIndex={() =>
            index === showIndex ? setShowIndex(null) : setShowIndex(index)
          } // its a callback fn passed
          key={index}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
