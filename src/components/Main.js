import React from "react";

class Main extends React.Component {
    render(){
        return(
            <div>
                
                <h2>{this.props.title} </h2>
                <img src={this.props.img} alt="" />
                <p>{this.props.Parg}</p>


            </div>
        )
    }


}


export default Main;