(function() {
  const viewToggle = document.getElementById('view-toggle');
  const playlistsToggle = document.getElementById('playlists-toggle');
  const runsToggle = document.getElementById('runs-toggle');
  viewToggle.addEventListener('click', (e) => {
    e.preventDefault();
    const selection = e.target;
    if (selection === runsToggle) {
      runsToggle.disabled = true;
      playlistsToggle.disabled = false;
    } else {
      runsToggle.disabled = false;
      playlistsToggle.disabled = true;
    }
  });
})();
