import React, {Component} from "react"

function Navigation(props) {
    
    return(
        <nav className="navbar navbar-expand navbar-light bg-light">
            <div className="nav navbar-nav">
                <a className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
                <span>Your Score: {props.score}</span>
                <span>High Score: {props.highscore}</span>
            </div>
        </nav>
    )
    
}

export default Navigation 