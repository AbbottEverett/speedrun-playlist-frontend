(function() {
  const backBtn = document.getElementById('back-btn');
  backBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.selectedUser = undefined;
    window.currentView = window.views[0];
    window.changeView(window.currentView, window.selectedUser);
  });
})();
