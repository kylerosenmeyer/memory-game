import React, {Component} from "react"

function Card (props) {

    console.log(`props: ${props}`)
    return(
        
        <div className="card text-white bg-primary signcard" id={props.id}>
            <img className="card-img-top" src={props.image} alt="image" />
        </div>
    )
}


export default Card 