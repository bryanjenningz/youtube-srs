/* global player */
import React, { Component } from 'react';
import englishSubtitles from './englishSubtitles.json';
import japaneseSubtitles from './japaneseSubtitles.json';

const getCurrentSubtitle = (subtitles, time) => {
  if (typeof time !== 'number' || time < 0) {
    throw new Error(
      `Time must be a positive number, this is what you passed in: ${time}`
    );
  }
  let i = 0;
  while (i < subtitles.length && subtitles[i].time <= time) {
    i++;
  }
  return subtitles[i === 0 ? 0 : i - 1].text;
};

const getEnglishSubtitle = getCurrentSubtitle.bind(null, englishSubtitles);
const getJapaneseSubtitle = getCurrentSubtitle.bind(null, japaneseSubtitles);

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
        <div>{getJapaneseSubtitle(videoTime)}</div>
        <div>{getEnglishSubtitle(videoTime)}</div>
      </div>
    );
  }
}

export default App;
