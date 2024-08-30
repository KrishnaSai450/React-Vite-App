import axios from "axios";
import { Component } from "react";
import CustomCards from "../BootStrap/cards";



class WeatherApi extends Component{

    state={
       
        dataInitial:[]
    }

    componentDidMount(){
        this.getUserLocation();
        
    }

    FetchWeatherData= async(lat,long)=>{
        const finalData= await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=d0e5da1fa5cecf804ed752cb3c30ee41`)
       
        
        this.setState({
            dataInitial:finalData
            // data:main 
        })
        
    }

    getUserLocation = () => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const { latitude, longitude } = position.coords;
              this.FetchWeatherData(latitude,longitude)
            },
            (error) => {
              console.error('Error getting user location:', error);
            }
          );
        } else {
          console.error('Geolocation is not supported by this browser.');
        }
      }


    render(){
        const {dataInitial}=this.state
        return(
            <>
            {dataInitial?(
                <div>
                    <h1>{dataInitial.name }</h1>
                </div>
            ):
            <p>Loading Weather</p>

            }
            {/* <h1>{this.state.name}</h1> */}

            </>
        )
    }
}
export default WeatherApi