import React, {Component} from "react"

class Navigation extends Component {

    render() {
    
        return(
            <nav className="navbar navbar-expand navbar-light bg-light topFix">
                <div className="nav navbar-nav">
                    <span>Your Score: {this.props.score}</span>
                    <span>High Score: {this.props.highscore}</span>
                </div>
            </nav>
        )
    }
    
}

export default Navigation 