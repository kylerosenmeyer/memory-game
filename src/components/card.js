import React, {Component} from "react"

class Card extends Component {

    render() {
        return(
            
            <div className="signcard"
                 id={this.props.id}>
                <img className="signimg" 
                     src={this.props.image} 
                     alt={this.props.name}
                     clicked={this.props.clicked}
                     onClick={() => this.props.clickSign(this.props.id, this.props.clicked)}
                     
                />
            </div>
        )
    }
}


export default Card 