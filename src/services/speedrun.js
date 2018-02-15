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
  function getSpeedrunByGameName(queryStr) {
    let formattedData = {};
    return axios.get(`${baseURL}/games?name=${queryStr}`)
      .then((res) => {
        let data = res.data.data[0];
        return axios.get(`${baseURL}/games/${data.id}/records?top=1`);
      })
      .then((res) => {
        const speedrun = res.data.data[0];
        formattedData.game_id = speedrun.game;
        formattedData.date = speedrun.runs[0].run.date;
        formattedData.category_id = speedrun.category;
        formattedData.platform_id = speedrun.runs[0].run.system.platform;
        formattedData.run_time = speedrun.runs[0].run.times.primary_t;
        if(speedrun.runs[0].run.videos){
          formattedData.video_url = speedrun.runs[0].run.videos.links[0].uri;
        }
        return axios.get(`${baseURL}/games/${formattedData.game_id}?embed=categories,platforms`);
      })
      .then((res) => {
        const gameData = res.data.data;
        formattedData.name = gameData.names.international;
        const categoriesList = gameData.categories.data;
        categoriesList.forEach((category) => {
          if (formattedData.category_id === category.id) {
            formattedData.category = category.name;
          }
        });
        const platformsList = gameData.platforms.data;
        platformsList.forEach((platform) => {
          if (formattedData.platform_id === platform.id) {
            formattedData.platform = platform.name;
          }
        });
        const duration = toHHMMSS(formattedData.run_time);
        formattedData.duration = duration;
        return formattedData;
      })
      .catch((err) => {
        console.log(err);
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
  window.getSpeedrunByGameName = getSpeedrunByGameName;
})();
