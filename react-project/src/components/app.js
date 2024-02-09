import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import Header from "./header";
import Body from "./body";
import ABoutClass from "./about";
import Contact from "./contact";
import Error from "./error";
import RestaurantMenu from "./restaurantMenu";
import Shimmer from "./shimmer";
import UserContext from "../utils/UserContext";
import Cart from "./Cart";
import appStore from "../utils/appStore";
// import Grocery from "./Grocery";

const Grocery = lazy(()=> import("./Grocery"));

const AppLayout = ()=>{
    const [userName, setUserName] = useState("");
    useEffect(()=>{
        setUserName("swapnil gupta");
    },[])
    return (
        <Provider store={appStore}>
            <div>
                <UserContext.Provider value={{userName : userName, setUserName}}>
                    <Header />
                    <Outlet/>
                </UserContext.Provider>
            </div>
        </Provider>
        
    )
}

const route = createBrowserRouter([
    {
        path : "/",
        element: <AppLayout/>,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <ABoutClass/>
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu/>
            },
            {
                path : "/grocery",
                element : <Suspense fallback={<Shimmer/>}><Grocery/></Suspense>
            },
            {
                path : "cart",
                element: <Cart/>
            }
        ],
        errorElement: <Error/>
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={route} />);
