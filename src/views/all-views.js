(function(){
  const subtitle = document.getElementById('subtitle');
  const itemList = document.getElementById('item-list');
  const backBtn = document.getElementById('back-btn');
  const findBtn = document.getElementById('find-btn');
  const createPlaylistBtn = document.getElementById('create-playlist-btn');
  const viewToggle = document.getElementById('view-toggle');
  const playlistsToggle = document.getElementById('playlists-toggle');
  const runsToggle = document.getElementById('runs-toggle');
  const views = ['HOME', 'USER', 'PLAYLIST', 'RUN'];
  const speedrunSearch = document.getElementById('speedrun-search');
  const videoContainer = document.getElementById('video-container');
  const playlistRunsForm = document.getElementById('playlist-runs-form');

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
        setRunView(user);
        break;
      default:
        console.log('Something is wrong!');
    }
  }
  function clearPreviousView(view, user){
    itemList.classList.remove('d-none');
    backBtn.classList.remove('d-none');
    findBtn.classList.remove('d-none');
    createPlaylistBtn.classList.remove('d-none');
    viewToggle.classList.remove('d-none');
    speedrunSearch.classList.remove('d-none');
    videoContainer.classList.remove('d-none');
    playlistRunsForm.classList.remove('d-none');
    subtitle.textContent = '';
    window.renderDropDown(view, user);
  }
  function setHomeView() {
    itemList.classList.add('d-none');
    backBtn.classList.add('d-none');
    createPlaylistBtn.classList.add('d-none');
    viewToggle.classList.add('d-none');
    speedrunSearch.classList.add('d-none');
    videoContainer.classList.add('d-none');
    subtitle.textContent = 'Select A User';
  }
  function setUserView(user) {
    subtitle.textContent = 'Choose A Playlist';
    speedrunSearch.classList.add('d-none');
    videoContainer.classList.add('d-none');
    runsToggle.disabled = false;
    playlistsToggle.disabled = true;
    const type = 'PLAYLIST';
    if (user !== 'Admin') {
      viewToggle.classList.add('d-none');
    } else {
      createPlaylistBtn.classList.add('d-none');
    }
    window.renderItemList(user, type);
  }
  function setPlaylistView(user) {
    subtitle.textContent = 'Pick A Run';
    createPlaylistBtn.classList.add('d-none');
    speedrunSearch.classList.add('d-none');
    videoContainer.classList.add('d-none');
    const type = 'RUN';
    if (user !== 'Admin') {
      viewToggle.classList.add('d-none');
    }
    window.renderItemList(user, type);
  }
  function setRunView(user) {
    subtitle.textContent = 'Speedrun Search Engine';
    itemList.classList.add('d-none');
    createPlaylistBtn.classList.add('d-none');
    viewToggle.classList.add('d-none');
    findBtn.classList.add('d-none');
    if (!user) {
      playlistRunsForm.classList.add('d-none');
    }
    window.renderPlaylistDropDown(user);
  }
  window.views = views;
  window.changeView = changeView;
})();
