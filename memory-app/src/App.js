import React, { Component } from 'react'
import Card from "./components/card"
import Container from "./components/container"
import Jumbotron from "./components/jumbotron"
import Navigation from "./components/navigation"
import signs from "./signs.json"
import "./App.css"

class App extends Component {

  state = { 
    signs: signs.filter( sign => sign.clicked === false )
   }

   

  render() {
    return (
      <div className="App">
        <Navigation />
        <Jumbotron />
        <Container>
          {signs.map(sign => (
            <Card id={sign.id}
                  image={sign.image}
            />
          ))}
        </Container>
      </div>
    );
  }
}

export default App;
