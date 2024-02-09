import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import ItemContent from "./ItemContent";
import { clearCart } from "../utils/cartSlice";

const Cart = ()=>{
    const cartItems = useSelector((store)=>store.cart.items); // subscrbing the cart items
    console.log("cartItem inside->",cartItems);

    const dispatch = useDispatch();
    const handleClearCart = ()=>{
        dispatch(clearCart());
    }

    return (
        <div className="w-11/12 flex flex-col justify-center items-center">
            <div className="font-bold text-gray-600 m-4 text-2xl">Cart Page</div>
            <button onClick={handleClearCart} className="p-2 m-2 border border-gray-600 rounded-lg bg-gray-200">Clear Cart</button>
            {
                cartItems.length===0 && <h1>Cart is empty. Please Add something!!</h1>
            }
            <ItemContent content={cartItems}/> 
        </div>
    )
};

export default Cart;