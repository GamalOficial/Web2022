import React from "react";

class Mundo extends React.Component {
    render(){

            return <div>
                Mundo {this.props.mundo}
                {React.Children.map(this.props.children, filho => {return React.cloneElement(filho,{...this.props})})}
            </div>
    }
}

export default Mundo
