import CustomList from "./Lists/list"
import MainHeading from "./Headings/heading"
import { SecondaryHeading } from "./Headings/heading"
import { recipeData } from "./Data/recipeData"
import CustomImage from "./Image/image"
import CustomButton from "./Buttons/buttons"
import CustomCards from "./BootStrap/cards"
import EmployeeDetails from "./Data/employeeData"
import FirstComponent from "./BootStrap/bootstrapComponent"
import CustomCarousel from "./BootStrap/bootStrapCarousel"
import CustomIcon from "./Icons/icons"



// function App() {
  

//   return (
//     <>
//        {
//     recipeData.map(eachRecipe=>{
//       return(
//         <div key={eachRecipe.id} >
//           <MainHeading heading={eachRecipe.name}>

//           <SecondaryHeading heading={"ingredients required"}  />

//           </MainHeading>



//           <CustomImage source={eachRecipe.image} width={200}  height={200} alternateText={"Recipe"}/>
//           <SecondaryHeading heading={"ingredients required"}  />
//           <CustomList list={eachRecipe.ingredients}  />
//           <SecondaryHeading heading={"instructions required"}  />
//           <CustomList list={eachRecipe.instructions}  />
//           <CustomButton  text={"Start preparation"}   />
//         </div>
//       )
//     })

//   } 
      
//     </>
//   )
// }

// function App(){
//   const obj = {
//     color:"red",
//     backgroundColor:"blue"
//   }
//   return(
//     <>
//     <CustomButton text={"click"} style={obj}/>
//     </>
//   )
// }


function App(){
  return(
    <div>
      <FirstComponent/>
      <CustomIcon/>
    </div>
  )
}

export default App
