import React, {Component} from "react"

class Card extends Component {

    render() {
        console.log(`props: ${this.props}`)
        return(
            
            <div className="card text-white signcard" 
                 id={this.props.id}>
                <img className="card-img-top" 
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