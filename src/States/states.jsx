
import { Component } from "react";
import FirstComponent from "../BootStrap/bootstrapComponent";
import Counter from "./counter";



class Greetings extends Component{

    clickHandler=()=>{
        this.setState({
            isSubscribed: !this.state.isSubscribed
        },()=>{})
    }

    state={
        isSubscribed : false,
        text1: "Subscribe",
        text2: "Subscribed"
    }

    render(){
        return(
            <>
            <button onClick={this.clickHandler} >{this.state.isSubscribed?this.state.text2:this.state.text1}</button>

            
            {
                this.state.isSubscribed?<div><Counter/><FirstComponent/></div>:<div><h4>Please Subscribe to access the Data</h4></div>
            }
            </>
        )
    }
}

export default Greetings