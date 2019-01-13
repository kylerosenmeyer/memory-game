import React, {Component} from "react"

class Navigation extends Component {

    render() {
    
        return(
            <nav className="score topFix" id="scorebar">
                <div className="scoreLeft">Your Score: {this.props.score}</div>
                <div className="scoreRight">High Score: {this.props.highscore}</div>
              
            </nav>
        )
    }
    
}

export default Navigation 