(function() {
  const backBtn = document.getElementById('back-btn');
  backBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.selectedUser = undefined;
    window.user_id = undefined;
    window.playlist_id = undefined;
    window.run_id = undefined;
    window.game_data = undefined;
    window.currentView = window.views[0];
    window.changeView(window.currentView, window.selectedUser);
  });
})();
