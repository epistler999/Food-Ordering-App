import React from "react";

class UserClass extends React.Component{
    customProps;
    constructor(props){
        super(props);
        console.log("props",this.props);
        // The purpose of using the super constructor with the props argument is to allow a component to inherit the properties of its parent component and also pass in additional properties as argument to the component.
        // meaning - using super(props) enables the child component to acces the standard properties of Reacr component along with custom props passed from parent like name, gmail.

        this.state = {
            count: 0,
            userInfo : {}
        }
    }

    // when component is loaded. We generally call api in this
    async componentDidMount(){
        console.log("component Did mount!!");
        let data = await fetch("https://api.github.com/users/KumarBadal208");
        let json = await data.json();
        console.log("json",json);
        this.setState({
            userInfo : json
        })
    }

    // when there is any update in the component, it is called
    componentDidUpdate(){
        console.log("component Did mount!!");
    }

    // when component get destroyed -> used to clear events like interval
    componentWillUnmount(){
        console.log("component destroyed");
    }

    increaseCount = ()=>{
        console.log("clicked");
        this.setState({
            count : this.state.count + 1
        });
    }

    render(){
        return (
            <div>
                {/* <button onClick={()=>{
                    this.setState({
                        count : this.state.count + 1
                    })
                }}>Count : {this.state.count}</button> */}
                <button onClick={this.increaseCount}>Count : {this.state.count}</button><br></br>
                <img src={this.state.userInfo.avatar_url}></img>
                <div>
                    Name : {this.state.userInfo.name}
                </div>
                <div>
                    User Name - {this.state.userInfo.login}
                </div>
                <div>
                    Email - {this.props.gmail}
                </div>
            </div>
        )
    }
};

export default UserClass;
