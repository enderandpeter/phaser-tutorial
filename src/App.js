import './App.css';
import Phaser from 'phaser';
// import Scene1 from './Scenes/Scene1';
// import Scene2 from './Scenes/Scene2';
import RPG from './Scenes/RPG';
import React, { Component } from 'react';

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 640,
    height: 360,
    backgroundColor: 0x000000,
    scene: RPG
};


class App extends Component {
    state = { game: null }

    componentWillMount(){
        this.setState({
            game : new Phaser.Game(config)
        });
    }
    render() {
        return (
          <div className="App">
            <div id="phaser-example"></div>
          </div>
        );
  }
}

export default App;
