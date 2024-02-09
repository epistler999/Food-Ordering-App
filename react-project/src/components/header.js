import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { LOGO_URL } from "../utils/constant";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
import {useSelector} from "react-redux";

const Header = ()=>{

    let status = useOnlineStatus();
    const {userName} = useContext(UserContext);

    const cartItems = useSelector((store)=>store.cart.items); // subscrbing the cart items
    console.log("cart->",cartItems);
    return (
        <div className="header flex bg-gray-200 justify-between shadow-lg sticky w-full top-0 z-10">
            <div className="header-logo ">
                <img className="w-20"
                src={LOGO_URL}></img>
            </div>
            <div className="header__nav-items flex items-center">
                <ul className="flex m-2">
                    <li className="p-2">Online Status : {status===true ? "true" : "false"}</li>
                    <li className="p-2 text-gray-700 font-bold"><Link to="/">home</Link></li>
                    <li className="p-2 text-gray-700 font-bold"><Link to="/about">About Us</Link></li>
                    <li className="p-2 text-gray-700 font-bold"><Link to="/contact">Contact Us</Link></li>
                    <li className="p-2 text-gray-700 font-bold"><Link to="/grocery">Grocery</Link></li>
                    <li className="p-2 text-gray-700 font-bold"><Link to="/cart">🛒 Cart({cartItems.length})</Link></li>
                    <li className="p-2 text-gray-700 font-bold">{userName}</li>
                </ul>
            </div>
        </div>
    )
};

export default Header;