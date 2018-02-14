(function() {
  const root = document.getElementById('root');
  window.getAllRuns()
    .then((res) => {
      console.log(res.data.data);
    })
    .catch((err) => {
      console.log(err)
    });
  window.getRunById(1)
    .then((res) => {
      console.log(res.data.data);
    })
    .catch((err) => {
      console.log(err)
    });
  window.getAllRunsFromAPlaylist(1)
    .then((res) => {
      console.log(res.data.data);
    })
    .catch((err) => {
      console.log(err)
    });
  window.getARunByIdFromAPlaylist(1,1)
    .then((res) => {
      console.log(res.data.data);
    })
    .catch((err) => {
      console.log(err)
    });
})();
