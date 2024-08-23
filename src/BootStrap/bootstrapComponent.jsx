import CustomCards from "./cards"
import EmployeeDetails from "../Data/employeeData"




const FirstComponent =()=>{
    return (
        <>
  <div className="container-fluid p-5 bg-primary text-white text-center">
    <h1>My First Bootstrap Page</h1>
    <p>Resize this responsive page to see the effect!</p>
  </div>
  <div className="container mt-5">
    <div className="row">
      <div className="col-sm-4">
        <CustomCards title={EmployeeDetails.name}  text={EmployeeDetails.designation} />
        
      </div>
      <div className="col-sm-4">
      <CustomCards title={"Micheal"} text={"Angular developer"}   />
        
        
      </div>
      <div className="col-sm-4">
      <CustomCards title={"Micheal"} text={"Angular developer"}   />
      </div>
    </div>
  </div>
</>

    )
}
export default FirstComponent