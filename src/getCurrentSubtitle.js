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

export { getEnglishSubtitle, getJapaneseSubtitle };
