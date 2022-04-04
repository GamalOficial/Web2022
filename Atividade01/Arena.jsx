import React from "react";
import Hero from "./Hero";

class Arena extends React.Component {
    render(){

         return <div>
             Arena {this.props.arena}
             {React.Children.map(this.props.children, filho => {return React.cloneElement(filho,{...this.props})})}</div>
    }
}

export default Arena
