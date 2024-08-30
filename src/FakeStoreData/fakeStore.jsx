import { Component } from "react";
import MainHeading from "../Headings/heading";
import axios from "axios";
import CustomDNALoader from "../Loader/loader";
import CustomCards from "../BootStrap/cards";


class FakeStore extends Component{

    state={
        storeData:[],
        loader:true
    }

    componentDidMount(){
        this.fetchData();
    }

    fetchData = async()=>{
        const {data} = await axios.get("https://dummyjson.com/products")
        console.log(data);
        this.setState({
            storeData:data.products,
            loader:false
        })
    }

    render(){
        return(
            <>
                <MainHeading heading={"FakeStore Shop"}/>
                {
                    this.loader?<CustomDNALoader/>:
                    <>
                    <div className="container">
                    <div className="row">
                        {
                            this.state.storeData.map((data,id)=>{
                                return(
                                    
                                        <div className="col-sm-4">
                                            <CustomCards title={data.title} text={data.description} source={data.images} buttonText={data.price}/>
                                        </div>
                                        
                                        
                                )
                            })
                        }
                    </div>
                    </div>
                    </>
                }

            </>
        )
    }


}

export default FakeStore