import { Component } from "react";
import CustomCards from "../BootStrap/cards";


class AddingCard extends Component{

    state = {
        employeeGivenData:[{name:"Krishna",salary:25000},{name:"Krishna",salary:30000}]
    }

    addHandler =()=>{
        const newData={name:"Krishna",salary:"45000"}
        const updatedData = [...this.state.employeeGivenData,newData]
        this.setState({
            employeeGivenData : updatedData
        })
    }

    removeCard=(index)=>{
        const removedData = this.state.employeeGivenData.filter((_,id)=>id!==index)
        this.setState({
            employeeGivenData : removedData
        })
    }


    render(){
        return(
            <>
                <button onClick={this.addHandler}>AddingCard</button>
                <div className="container">
                            <div className="row">

                {
                    this.state.employeeGivenData.map((eachEmployee,index)=>{
                        return(
                            
                              <div className="col-sm-4">
                                <CustomCards title={eachEmployee.name} text={eachEmployee.salary} ind={index} removeHandler={this.removeCard} />
                                
                              </div>
                              
                           
                        )
                    })
                }
                 </div>
                 </div>
            </>
        )
    }
}

export default AddingCard