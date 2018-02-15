(function() {
  const findBtn = document.getElementById('find-btn');
  findBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.currentView = window.views[3];
    window.changeView(window.currentView, window.selectedUser);
  });
})();
