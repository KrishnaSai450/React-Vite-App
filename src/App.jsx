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
import Greetings from "./States/states"
// import CardAdd from "./States/cardAdd"
import AddingCard from "./States/AddingCards"
import Recipes from "./Recipes/recipes"
import FakeStore from "./FakeStoreData/fakeStore"
import BulbTask from "./TaskWork/bulbOn"
import WeatherApi from "./WeatherAPI/weatherApi"
import { Bulb } from "./TaskWork/bulbTask"
import { CIcon } from '@coreui/icons-react';
import { cilList, cilShieldAlt } from '@coreui/icons';
import CardsComponents from "./Recipes/recipes-seemore"




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


// function App(){
//   return(
//     <div>
//       <FirstComponent/>
//       <CustomIcon/>
//     </div>
//   )
// }



// function App(){
//   return(
//     <>
//       {/* <Greetings/> */}
//       {/* <CardAdd/> */}
//       <AddingCard/>
//       <CustomIcon text={cilShieldAlt}/>
//     </>
//   )
// }


// function App(){
//   return(
//     <>
   
//     <FakeStore/>
//     </>
//   )
// }


function App(){
  return(
    <>
      {/* <BulbTask/> */}
      {/* <WeatherApi/> */}
      {/* <Bulb/> */}
      {/* <CustomIcon text={cilList}/> */}
       {/* <Recipes/> */}
       <CardsComponents/>
    </>
  )
}

export default App
