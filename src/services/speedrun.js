(function() {
  const baseURL = 'https://www.speedrun.com/api/v1';
  function getRunData(data){
    return axios.get(`${baseURL}/games/${data.game_id}?embed=categories,platforms`)
      .then((response) => {
        const gameData = response.data.data;
        let formattedData = {};
        formattedData.name = gameData.names.international;
        const categoriesList = gameData.categories.data;
        categoriesList.forEach((category) => {
          if (data.category_id === category.id) {
            formattedData.category = category.name;
          }
        });
        const platformsList = gameData.platforms.data;
        platformsList.forEach((platform) => {
          if (data.platform_id === platform.id) {
            formattedData.platform = platform.name;
          }
        });
        const duration = toHHMMSS(data.run_time);
        formattedData.duration = duration;
        return formattedData;
      });
  }
  function toHHMMSS (secs) {
    var sec_num = parseInt(secs, 10)
    var hours   = Math.floor(sec_num / 3600) % 24
    var minutes = Math.floor(sec_num / 60) % 60
    var seconds = sec_num % 60
    return [hours,minutes,seconds]
        .map(v => v < 10 ? "0" + v : v)
        .filter((v,i) => v !== "00" || i > 0)
        .join(":")
  }
  window.getRunData = getRunData;
})();
