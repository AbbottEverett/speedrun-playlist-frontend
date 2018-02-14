(function(){
  const subtitle = document.getElementById('subtitle');
  const itemList = document.getElementById('item-list');
  const backBtn = document.getElementById('back-btn');
  const findBtn = document.getElementById('find-btn');
  const viewToggle = document.getElementById('view-toggle');

  function clearPreviousView(){
    itemList.classList.remove('d-none');
    backBtn.classList.remove('d-none');
    findBtn.classList.remove('d-none');
    viewToggle.classList.remove('d-none');
    subtitle.textContent = '';
  }
  function setHomeView() {
    itemList.classList.add('d-none');
    backBtn.classList.add('d-none');
    findBtn.classList.add('d-none');
    viewToggle.classList.add('d-none');
    subtitle.textContent = 'Select A User';
  }
  function setUserView() {
    backBtn.classList.add('d-none');
    viewToggle.classList.add('d-none');
    subtitle.textContent = 'Choose A Playlist';
  }
  function setPlaylistView() {
    viewToggle.classList.add('d-none');
    subtitle.textContent = 'Pick A Run';
  }

  window.clearPreviousView = clearPreviousView;
  window.setHomeView = setHomeView;
  window.setUserView = setUserView;
  window.setPlaylistView = setPlaylistView;
})();
