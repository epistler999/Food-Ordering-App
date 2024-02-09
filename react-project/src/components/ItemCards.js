import { useState } from "react";
import ItemContent from "./ItemContent";

const ItemCards = ({res, showIndex, setShowIndex})=>{
    const [dropDown, setDropDown] = useState(false);
    const handleDropDown = ()=>{
        // setDropDown(!dropDown);
        setShowIndex();
    }
    return (
        <div className=" w-2/4 my-2 border-gray-400 border-b-2 shadow-2xl p-4">
            <div className="flex justify-between cursor-pointer" onClick={handleDropDown}>
                <div className="font-bold text-gray-600">{res.card.card.title}({res.card.card.itemCards.length})</div>
                <div>▼</div>
            </div>
            {
                showIndex && <ItemContent content={res.card.card.itemCards}/> 
            } 
        </div>
    )
}

export default ItemCards;