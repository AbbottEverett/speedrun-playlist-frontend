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
    videoBox.appendChild(iFrame);
  }
  function renderYouTubeVideo(videoUrl) {
    const check = '.com/watch?v=';
    const index = videoUrl.indexOf(check);
    const videoId = videoUrl.slice(index+check.length);
    const iFrame = document.createElement('iframe');
    iFrame.setAttribute('src', `https://www.youtube.com/embed/${videoId}`);
    iFrame.setAttribute('frameborder', 0);
    iFrame.setAttribute('allow', 'autoplay; encrypted-media');
    iFrame.setAttribute('allowfullscreen', true);
    iFrame.setAttribute('height', 315);
    iFrame.setAttribute('width', 560);
    videoBox.appendChild(iFrame);
    // <iframe
    //   width="560"
    //   height="315"
    //   src="https://www.youtube.com/embed/mSng9jvTo4o"
    //   frameborder="0"
    //   allow="autoplay; encrypted-media"
    //   allowfullscreen>
    // </iframe>
  }
  function renderVideoBox(videoUrl) {
    console.log(videoUrl);
    const twitchURL = 'https://www.twitch.tv/';
    const youtubeURL = 'https://www.youtube.com/';
    if (videoUrl) {
      if (videoUrl.includes(twitchURL)) {
        renderTwitchVideo(videoUrl);
      } else if (videoUrl.includes(youtubeURL)) {
        renderYouTubeVideo(videoUrl);
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
