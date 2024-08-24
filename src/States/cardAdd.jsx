// import { Component } from "react";
// import CustomCards from "../BootStrap/cards";


// class CardAdd extends Component{


//     state={
//         employeeData:[{name:"Krishna", salary:25000},{name:"Random",salary:20000}]
//     }

//     addingCard=()=>{
//         const newData={name:"Random2",salary:30000}
//         const updatedData=[...this.state.employeeData,newData]

//         this.setState({
//            employeeData:updatedData 
//         })
//     }
//     removeCard=(index)=>{
//         const filteredData=this.state.employeeData.filter((_,id)=>id!==index)

//         this.setState({
//             employeeData:filteredData
//         })
//     }

//     render(){
//         return(
//             <>
//             <button onClick={this.addingCard}>AddCard</button>
//             <div className="container">
//                         <div className="row">
//             {
//             this.state.employeeData.map((eachEmployee,index)=>{
                
//                 return(
//                     <>
                       
//                         <div className="col-sm-4">
//                             <CustomCards title={eachEmployee.name} text={eachEmployee.salary} ind={index} removeHandler={this.removeCard}/>
//                         </div>


                        
                        
//                     </>
//                 )
                
//             })
            
//     }
//     </div>
//     </div>
//             </>
//         )
//     }
// }

// export default CardAdd