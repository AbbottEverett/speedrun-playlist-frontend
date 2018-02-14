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
      window.currentView = window.views[2]
      window.changeView(window.currentView, window.selectedUser);
    } else {
      runsToggle.disabled = false;
      playlistsToggle.disabled = true;
      window.currentView = window.views[1]
      window.changeView(window.currentView, window.selectedUser);
    }
  });
})();
