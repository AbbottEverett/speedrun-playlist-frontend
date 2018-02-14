(function(){
  const subtitle = document.getElementById('subtitle');
  const itemList = document.getElementById('item-list');
  const backBtn = document.getElementById('back-btn');
  const findBtn = document.getElementById('find-btn');
  const viewToggle = document.getElementById('view-toggle');

  function changeView(view, user) {
    clearPreviousView(view, user);
    switch(view) {
      case 'HOME':
        setHomeView(view);
        break;
      case 'USER':
        setUserView();
        break;
      case 'PLAYLIST':
        setPlaylistView();
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
  function setHomeView(view) {
    itemList.classList.add('d-none');
    backBtn.classList.add('d-none');
    findBtn.classList.add('d-none');
    viewToggle.classList.add('d-none');
    subtitle.textContent = 'Select A User';
  }
  function setUserView(view) {
    backBtn.classList.add('d-none');
    viewToggle.classList.add('d-none');
    subtitle.textContent = 'Choose A Playlist';
  }
  function setPlaylistView() {
    viewToggle.classList.add('d-none');
    subtitle.textContent = 'Pick A Run';
  }

  window.changeView = changeView;
})();
