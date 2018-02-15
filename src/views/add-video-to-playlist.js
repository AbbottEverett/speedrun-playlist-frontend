(function() {
  const playlistRunsForm = document.getElementById('playlist-runs-form');
  console.log(playlistRunsForm);
  playlistRunsForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(`Playlist Id: ${window.playlist_id}`);
    console.log(`Run Id: ${window.run_id}`);
    // Check if run exists by Id
    // if it does, add playlist run only
    // if it doesnt, add run, then playlist run
    if (!window.run_id) {
      console.log('This is a run that doesnt exist yet');
    }
    const reqBody = {
      playlist_id: window.playlist_id,
      run_id: window.run_id
    };
    window.addARunToAPlaylistById(window.playlist_id, reqBody)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  });
})();
