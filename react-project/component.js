import React from "react";
import ReactDOM from "react-dom";
// import download.

const Component = ()=>{
    return (
        <div className="component">
            {/* <img src="image/rmt.svg" alt="image"/> */}
            <span className="component__image"></span>
            <input placeholder="Search"></input>
            <span className="component__image"></span>
        </div>
    )
};
// https://legacy.reactjs.org/logo-og.png

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Component/>);
// /home/kumar/Desktop/react project/image/rmt.svg
// image/rmt.svg