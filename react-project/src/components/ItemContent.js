import { addItem } from "../utils/cartSlice";
import { RES_LOGO } from "../utils/constant";
import {useDispatch} from "react-redux";

const ItemContent = ({content})=>{
    const dispatch = useDispatch();
    const addToCart = (res)=>{
        console.log("clicked",res);
        // dispatch the action
        dispatch(addItem(res));
    }
    return (
        <div>
            {
                content.map(res=>(
                    <div key={res.card.info.id} className="border-gray-200 border-b-2 flex justify-between">
                        <div>{res.card.info.name} (₹{res.card.info.price/100})</div>
                        {/* {
                            res.card.info.imageId && <img className="w-20 h-20" src={RES_LOGO + res.card.info.imageId} />
                        } */}
                        <div>
                            <button onClick={()=>addToCart(res)} className="border w-16 h-6 absolute text-sm border-gray-400 rounded-lg bg-black text-white">Add+</button>
                            <img className="w-20 h-20" src={RES_LOGO + res.card.info.imageId} />
                        </div>
                    </div>
                ))
            }
        </div>
    )
};

export default ItemContent;