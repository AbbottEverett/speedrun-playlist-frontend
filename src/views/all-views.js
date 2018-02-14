(function(){
  const subtitle = document.getElementById('subtitle');
  const itemList = document.getElementById('item-list');
  const backBtn = document.getElementById('back-btn');
  const findBtn = document.getElementById('find-btn');
  const viewToggle = document.getElementById('view-toggle');
  const playlistsToggle = document.getElementById('playlists-toggle');
  const runsToggle = document.getElementById('runs-toggle');
  const views = ['HOME', 'USER', 'PLAYLIST', 'RUN'];

  function changeView(view, user) {
    clearPreviousView(view, user);
    switch(view) {
      case 'HOME':
        setHomeView();
        break;
      case 'USER':
        setUserView(user);
        break;
      case 'PLAYLIST':
        setPlaylistView(user);
        break;
      case 'RUN':
        console.log('Will be handled later');
        break;
      default:
        console.log('Something is wrong!');
    }
  }
  function clearPreviousView(view, user){
    itemList.classList.remove('d-none');
    backBtn.classList.remove('d-none');
    findBtn.classList.remove('d-none');
    viewToggle.classList.remove('d-none');
    subtitle.textContent = '';
    window.renderDropDown(view, user);
  }
  function setHomeView() {
    itemList.classList.add('d-none');
    backBtn.classList.add('d-none');
    findBtn.classList.add('d-none');
    viewToggle.classList.add('d-none');
    subtitle.textContent = 'Select A User';
  }
  function setUserView(user) {
    backBtn.classList.add('d-none');
    subtitle.textContent = 'Choose A Playlist';
    runsToggle.disabled = false;
    playlistsToggle.disabled = true;
    const type = 'PLAYLIST';
    if (user !== 'Admin') {
      viewToggle.classList.add('d-none');
    }
    window.renderItemList(user, type);
  }
  function setPlaylistView(user) {
    subtitle.textContent = 'Pick A Run';
    const type = 'RUN';
    if (user !== 'Admin') {
      viewToggle.classList.add('d-none');
    }
    window.renderItemList(user, type);
  }

  window.views = views;
  window.changeView = changeView;
})();
