import React, {Component} from "react"

class Container extends Component {

    render() {

        return(
            <div className={"container appWrapper " + this.props.toggle}>
            {this.props.children}
            </div>
        )
    }
}

export default Container 