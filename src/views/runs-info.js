(function() {
  const videoBox = document.getElementById('video-box');
  const videoTitle = document.getElementById('video-title');
  const categoryText = document.getElementById('category-text');
  const runTimeText = document.getElementById('run-time-text');
  const platformText = document.getElementById('platform-text');
  const dateText = document.getElementById('date-text');
  function clearVideoBox() {
    while(videoBox.firstChild) {
      videoBox.removeChild(videoBox.firstChild);
    }
  }
  function clearVideoDescription() {
    videoTitle.textContent = 'Game Title';
    categoryText.textContent = '';
    runTimeText.textContent = '';
    platformText.textContent = '';
    dateText.textContent = '';
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
      videoBox.textContent = 'No video provided! :[';
    }
  }
  function renderRunTest() {
    return window.getRunById(window.run_id)
      .then((res) => {
        const game = res.data.data;
        clearVideoBox();
        clearVideoDescription();
        renderVideoBox(game.video_url);
        dateText.textContent = game.date;
        return window.getRunData(game);
      })
      .then((res) => {
        videoTitle.textContent = res.name;
        categoryText.textContent = res.category;
        platformText.textContent = res.platform;
        runTimeText.textContent = res.duration;
      })
      .catch((err) => {
        console.log(err)
      });
  }
  window.renderRunTest = renderRunTest;
})();
