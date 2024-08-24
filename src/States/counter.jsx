import { Component } from "react";
import { errorToasts, successToasts } from "../Toasts/toastHelper";


class Counter extends Component{

    state={
        count:0
    }

    countIncrement=()=>{
        this.setState({
            count:this.state.count+1
        },()=>{
            successToasts(`Current Count is ${this.state.count}`, "top-right")
        })
    }
    countDecrement=()=>{
        this.setState({
            count:this.state.count-1
        },()=>{
            errorToasts(`Current Count is ${this.state.count}`,"top_right")
        })
    }

    countReset =()=>{
        this.setState({
            count:0
        },()=>{
            successToasts(`Current Count is ${this.state.count}`, "top-right")
        })
    }


    render(){
        return(
            <>
            <h2>Count {this.state.count}</h2>
            <button onClick={this.countIncrement}>Increment</button>
            <button onClick={this.countDecrement}>Decrement</button>
            <button onClick={this.countReset}>Reset</button>
            </>
        )
    }
}

export default Counter