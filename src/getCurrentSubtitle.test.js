import { getEnglishSubtitle, getJapaneseSubtitle } from './getCurrentSubtitle';

describe('getEnglishSubtitle', () => {
  it('gets the correct English subtitle depending on the time', () => {
    expect(getEnglishSubtitle(0)).toEqual("[Hikaru] Hi there it's Hikaru.");
    expect(getEnglishSubtitle(0.9999)).toEqual("[Hikaru] Hi there it's Hikaru.");
    expect(getEnglishSubtitle(1)).toEqual("Today I'm here cuz Tencho called me.");
  });
});

describe('getJapaneseSubtitle', () => {
  it('gets the correct Japanese subtitle depending on the time', () => {
    expect(getJapaneseSubtitle(0)).toEqual("はいどうもこんにちはヒカルです。");
    expect(getJapaneseSubtitle(0.8888)).toEqual("はいどうもこんにちはヒカルです。");
    expect(getJapaneseSubtitle(1)).toEqual("今回ですけども");
  });
});
