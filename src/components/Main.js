import React from "react";
import HornedBeast from "./HornedBeast";
import arrayData from "./data.json"

class Main extends React.Component {
    render(){

        return(
            <div style={{ backgroundColor: "lightgray" }}>
                {arrayData.map((element, ind) => {
                    return( 
                    <HornedBeast key={ind} title={element.title} img={element.image_url} Parg={element.description} keyword={element.keyword} horns={element.horns}/>
                    )
                })}
            </div>
       
             
        )
    }


}


export default Main;