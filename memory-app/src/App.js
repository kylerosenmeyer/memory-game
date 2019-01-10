import React, { Component } from 'react'
import Card from "./components/card"
import Container from "./components/container"
import Row from "./components/row"
import Jumbotron from "./components/jumbotron"
import Navigation from "./components/navigation"
import signs from "./signs.json"
import "./App.css"

class App extends Component {

  

  state = {signs}

  score = {
    userScore: 0,
    highScore: 0
  }

  //!Game Logic
  clickSign = (id, check) => {

    let arrayID = id - 1
    console.log(`arrayid: ${arrayID}`)
    console.log(`clicked? ${check}`)

      if ( check === "true" )  {
      
        console.log("Game Over!")
        console.log(`Final Score: ${this.score.userScore}`)
        this.score.userScore = 0

        //*Reset Images
        for ( let i=0; i<signs.length; i++) {
          signs[i].clicked = "false"
        }
        let randomSigns = this.shuffle(signs)
        this.setState({randomSigns})
        this.updateScore()

      } else if ( check === "false" ) {

        signs[arrayID].clicked = "true"
        this.score.userScore++
        console.log(`score: ${this.score.userScore}`)

        if ( this.score.userScore > this.score.highScore ) {
          this.score.highScore++
          console.log(`highscore: ${this.score.highScore}`)
        }
        
        let randomSigns = this.shuffle(signs)
        this.setState({randomSigns})
        this.updateScore()
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
  updateScore = () => {
    console.log(`score updating: ${this.score.userScore}`)
    this.setState(this.score)
  }

  render() {
    return (
      <div className="App">
        <Navigation score={this.score.userScore}
                    highscore={this.score.highScore}
                    updateScore={this.updateScore}
        />
        <Jumbotron />
        <Container>
          <Row row="row">
            {signs.map((sign, key) => (
              <Card id={sign.id}
                    image={sign.image}
                    clicked={sign.clicked}
                    name={sign.name}
                    clickSign={this.clickSign}
                    key={key}
              />
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
