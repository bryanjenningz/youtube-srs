// Instructions: To get new subtitles, click the transcript, paste this into
// the console, then copy the subtitle output.

const getSubtitles = () =>
  Array
    .from(document.querySelectorAll('#transcript-scrollbox .caption-line'))
    .map(line => ({
      time: Number(Number(line.getAttribute('data-time')).toFixed(1)),
      text: line.querySelector('.caption-line-text').textContent
    }));

const printSubtitles = () => console.log(JSON.stringify(getSubtitles()));

printSubtitles();
