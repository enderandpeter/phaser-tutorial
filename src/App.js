import './App.css';
import Phaser from 'phaser';
import Scene1 from './Scenes/Scene1';
import Scene2 from './Scenes/Scene2';
import React, { Component } from 'react';

export const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 256,
    height: 272,
    backgroundColor: 0x000000,
    scene: [Scene1, Scene2]
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
