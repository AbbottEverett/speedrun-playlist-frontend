(function() {
  // const root = document.getElementById('root');
  const views = ['HOME', 'USER', 'PLAYLIST', 'RUN'];
  let currentView = views[1];
  function changeView(view) {
    window.clearPreviousView();
    switch(view) {
      case 'HOME':
        window.setHomeView(view);
        break;
      case 'USER':
        window.setUserView();
        break;
      case 'PLAYLIST':
        window.setPlaylistView();
        break;
      case 'RUN':
        console.log('Will be handled later');
        break;
      default:
        console.log('Something is wrong!');
    }
  }
  changeView(currentView);
})();
