import { Component } from "react";
import CustomButton from "../Buttons/buttons";
import CustomCards from "../BootStrap/cards";
import CustomImage from "../Image/image";


class BulbTask extends Component{

    state={
        cardIndex:[{name:"Krishna"}],
        isLightOn: false,
        src1:"https://tse1.mm.bing.net/th?id=OIP.maWRvjA73l5CT719MqvdSAHaHk&pid=Api",
        src2:"https://toppng.com/uploads/preview/light-bulb-on-off-png-11553940186lbyqngqg1y.png"
    }

    BulbOn =()=>{
        const newCard={name:"Krishna"}
        const finalCard = [...this.state.cardIndex,newCard]
        this.setState({
            cardIndex : finalCard
        })
    }

    BulbClicked=(index)=>{
        const name=[...this.state.cardIndex]
        // console.log(name[index])
         name[index].isLightOn = !name[index].isLightOn;
        //  console.log(name[index])
        this.setState({
            cardIndex: name
            
        })
    }

    render(){
        return(
            <>
                <button onClick={this.BulbOn}>AddCard</button>

                <div className="container">
                            <div className="row">

                {
                   this.state.cardIndex.map((eachCard,index)=>{
                    return(
                        <div className="col-sm-4">
                            <CustomCards title={eachCard.name} source={this.state.isLightOn?this.state.src2:this.state.src1} onNewClick={this.BulbClicked(index)}/>
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

export default BulbTask