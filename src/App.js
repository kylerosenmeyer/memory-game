import React, { Component } from 'react'
import Card from "./components/card"
import Container from "./components/container"
import Jumbotron from "./components/jumbotron"
import Navigation from "./components/navigation"
import signs from "./signs.json"
import "./App.css"

class App extends Component {

  sign = {array: signs}

  score = {
    userScore: 0,
    highScore: 0
  }

  shake = {
    animate: "noshake"
  }

  //!Game Logic
  clickSign = (id, check) => {
      // for (let i=0; i<signs.length;i++) {
      //   console.log(`${signs[i].clicked}`)
      // }
      // console.log("---------------------------------------")
      if ( check === "true" )  {

        this.score.userScore = 0
        this.shake.animate = "shake"
        this.toggleShake()
        this.updateScore()
        this.sign.array.forEach((sign) => {sign.clicked = "false"})
        this.setState(this.sign.array)

      } else if ( check === "false" ) {

        this.sign.array[id].clicked = "true"
        this.score.userScore++

        if ( this.score.userScore > this.score.highScore ) {this.score.highScore++}
        
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
        <Container toggle={this.shake.animate} shake={this.toggleShake}>
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
