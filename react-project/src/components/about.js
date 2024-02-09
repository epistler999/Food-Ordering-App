import React from "react";
import UserClass from "./userClass";
import UserContext from "../utils/UserContext";

const About = ()=>{
    return (
        <div>
            <h1>About Us</h1>
            <h2>This is React Practise Project</h2>
        </div>
    )
};

class ABoutClass extends React.Component{
    render(){
        return (
            <div>
                <UserContext.Consumer>
                    {data=>(<h1 className="font-bold">{data.userName}</h1>)}
                </UserContext.Consumer>
                <h1>About Us</h1>
                <h2>This is React Practise Project(AboutClass)</h2>
                <UserClass name="swapnil gupta" gmail="testfood@support.in" />
            </div>
        )
    }
};

export default ABoutClass;
