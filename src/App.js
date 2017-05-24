/* global player */
import React, { Component } from 'react';

class App extends Component {
  static TIME_INTERVAL = 80;

  constructor() {
    super();

    this.state = { videoTime: 0 };

    setInterval(() => {
      if (player && typeof player.getCurrentTime === 'function') {
        this.setState({ videoTime: player.getCurrentTime() });
      }
    }, App.TIME_INTERVAL);
  }

  render() {
    const { videoTime } = this.state;

    return (
      <div>
        <div>Time: {videoTime}</div>
      </div>
    );
  }
}

export default App;
