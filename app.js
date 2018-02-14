(function() {
  // const root = document.getElementById('root');
  const views = ['HOME', 'USER', 'PLAYLIST', 'RUN'];
  let selectedUser;
  let currentView = views[0];
  const subtitle = document.getElementById('subtitle');

  function changeView(view) {
    switch(view) {
      case 'HOME':
        subtitle.textContent = 'Select A User';
        break;
      case 'USER':
        subtitle.textContent = 'Choose A Playlist';
        break;
      case 'PLAYLIST':
        subtitle.textContent = 'Pick A Run';
        break;
      case 'RUN':
        break;
      default:
        console.log('Something is wrong!');
    }
  }
  changeView(currentView);
})();
