import { Component } from "react";
import axios from "axios";
import CustomList from "../Lists/list";
// import "./App.css";

class CardsComponents extends Component {
    state = {
      response: [],
      IsRead: [],
      flag:false
    };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const { status, data } = await axios.get("https://dummyjson.com/recipes");
    if (status == 200) {
      this.setState(
        {
          response: data.recipes,
          IsRead: new Array(data.recipes).fill(false),
        }
      );
    }
  };

  readFunction = (index) => {
    const IsRead = [...this.state.IsRead];
    IsRead[index] = !IsRead[index];
    this.setState({
      IsRead: IsRead,
      flag:true
    });
  };

  render() {
    const { IsRead } = this.state;
    return (
      <>
        {this.state.response.map((eachItem, index) => {
          return (
            <div key={index} className="card">
              <h2>{eachItem.name}</h2>
              <img src={eachItem.image} alt="" height={"100px"} width={"100px"} />
              <div>{IsRead[index] ? <CustomList list={eachItem.ingredients}/> : ""}</div>
              <div>{IsRead[index] ? <CustomList list={eachItem.instructions}/> : ""}</div>
              
             
              <button onClick={() => this.readFunction(index)}>
                {IsRead[index]
                  ? `Read Less ${index + 1}`
                  : `Read ${index + 1}`}
              </button>
                
              
            </div>
          );
        })}
      </>
    );
  }
}

export default CardsComponents;