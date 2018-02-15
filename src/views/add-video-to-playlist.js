(function() {
  const playlistRunsForm = document.getElementById('playlist-runs-form');
  playlistRunsForm.addEventListener('submit', (e) => {
    e.preventDefault();
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
        window.run_id = undefined;
        window.currentView = window.views[2];
        window.changeView(window.currentView, window.selectedUser);
      })
      .catch((err) => {
        console.log(err);
      });
  });
})();
