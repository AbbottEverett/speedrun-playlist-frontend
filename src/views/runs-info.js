(function() {
  const videoBox = document.getElementById('video-box');
  function clearVideoBox() {
    while(videoBox.firstChild) {
      videoBox.removeChild(videoBox.firstChild);
    }
  }
  function renderTwitchVideo(videoUrl) {
    const check = '.tv/videos/';
    const index = videoUrl.indexOf(check);
    const videoId = videoUrl.slice(index+check.length);
    const iFrame = document.createElement('iframe');
    iFrame.setAttribute('src', `https://player.twitch.tv/?autoplay=false&video=v${videoId}`);
    iFrame.setAttribute('frameborder', 0);
    iFrame.setAttribute('allowfullscreen', true);
    iFrame.setAttribute('scrolling', 'no');
    iFrame.setAttribute('height', 378);
    iFrame.setAttribute('width', 620);
    // <iframe src="https://player.twitch.tv/?autoplay=false&video=v178152895" frameborder="0" allowfullscreen="true" scrolling="no" height="378" width="620">
    // </iframe>
    videoBox.appendChild(iFrame);
  }
  function renderYouTubeVideo(videoUrl) {

  }
  function renderVideoBox(videoUrl) {
    console.log(videoUrl);
    const twitchURL = 'https://www.twitch.tv/';
    const youtubeURL = 'https://www.youtube.com/';
    if (videoUrl) {
      if (videoUrl.includes(twitchURL)) {
        renderTwitchVideo(videoUrl);
      } else if (videoUrl.includes(youtubeURL)) {
        console.log('Youtube');
      }
    } else {
      // Render some error message
    }
  }
  function renderRunTest() {
    return window.getRunById(window.run_id)
      .then((res) => {
        const game = res.data.data;
        clearVideoBox();
        renderVideoBox(game.video_url);
        return window.getRunData(game);
      })
      .then((res) => {

      })
      .catch((err) => {
        console.log(err)
      });
  }
  window.renderRunTest = renderRunTest;
})();
