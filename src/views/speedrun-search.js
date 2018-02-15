(function() {
  const speedrunSearchForm = document.getElementById('speedrun-search-form');
  const input = document.getElementById('speedrun-search-input');
  speedrunSearchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(input.value);
    const searchQuery = encodeURIComponent(input.value);
    const formattedData = {};
    window.getSpeedrunByGameName(searchQuery)
      .then((res) => {
        window.game_data = res;
        window.clearVideoBox();
        window.clearVideoDescription();
        window.renderVideoBox(res.video_url);
        window.renderVideoDesciption(res);
      })
      .catch((err) => {
        console.log(err);
      });
    input.value = '';
  });

  // data i need
  // game_id
  // category_id
  // run_time
  // platform_id
  //video_url
  // date
})();
