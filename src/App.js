import React, { Component } from 'react'
import Card from "./components/card"
import Container from "./components/container"
import Jumbotron from "./components/jumbotron"
import Navigation from "./components/navigation"
import signs from "./signs.json"
import "./App.css"

class App extends Component {

  //Bring in the Signs JSON array as an object property.
  sign = {array: signs}

  //Set an object up to keep score.
  score = {
    userScore: 0,
    highScore: 0
  }

  //Set an object to activate the shake animation.
  shake = {
    animate: "noshake"
  }

  //!Game Logic - This controls the main functionality of the game.
  clickSign = (id, check) => {
      //*clickSign has to parameters:
      //*id = the unique id of the sign
      //*check = the data-click property of the sign. This is a string "true" or "false"
      if ( check === "true" )  {
        //*If the sign has been clicked before, check will be true. 
        //*Set the score to zero, shake the signs, and reset the sign statuses to "false"
        this.score.userScore = 0
        this.shake.animate = "shake"
        this.toggleShake()
        this.updateScore()
        this.sign.array.forEach((sign) => {sign.clicked = "false"})
        this.setState(this.sign.array)

      } else if ( check === "false" ) {

        //*If the sign hasn't been clicked before, check will be false.
        //*Get the index position of the sign from it's unique id.
        //*Update the sign's status to true and increment the user score.
        let index = this.sign.array.map( e => e.id ).indexOf(id)
        this.sign.array[index].clicked = "true"
        this.score.userScore++

        //*If the user score is now higher than the high score, increment the high score.
        if ( this.score.userScore > this.score.highScore ) {this.score.highScore++}
        
        //*Shuffle the signs, update the scores, and make sure the "shake" is turned off.
        let randomSigns = this.shuffle(this.sign.array)
        this.setState(randomSigns)
        this.updateScore()
        this.shake.animate = "noshake"
        this.toggleShake()
      } 
  }

  //!Shuffle Logic: This is the Fisher-Yates Shuffle Algorithm
  shuffle = (array) => {
    let currentIndex = array.length, temporaryValue, randomIndex
      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex -= 1
        temporaryValue = array[currentIndex]
        array[currentIndex] = array[randomIndex]
        array[randomIndex] = temporaryValue
    }
    return array
  }

  //!Update Score
  updateScore = () => this.setState(this.score)

  //!Shake!
  toggleShake = () => this.setState(this.shake)

  render() {
    return (
      <div className="App">
        <Navigation score={this.score.userScore}
                    highscore={this.score.highScore}
                    updateScore={this.updateScore}
        />
        <Jumbotron />
        <Container toggle={this.shake.animate} 
                   shake={this.toggleShake}
        >
            {this.sign.array.map((sign, key) => (
              <Card id={sign.id}
                    image={sign.image}
                    clicked={sign.clicked}
                    name={sign.name}
                    clickSign={this.clickSign}
                    key={key}
              />
            ))}
        </Container>
      </div>
    );
  }
}

export default App;
