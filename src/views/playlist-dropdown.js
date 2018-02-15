(function() {
  const playlistDropdownPrimary = document.getElementById('playlist-dropdown-primary');
  const playlistDropdownMenu = document.getElementById('playlist-dropdown-menu');

  function renderPlaylistDropDown(name) {
    clearDropDown();
    if (name === 'Admin') {
      return window.getAllPlaylists()
                .then((response) => {
                  const playlistList = response.data.data;
                  playlistList.forEach((playlist) => {
                    if(playlist.id !== parseInt(window.playlist_id)) {
                      const button = createDropDownButton(playlist);
                      playlistDropdownMenu.appendChild(button);
                    } else {
                      playlistDropdownPrimary.textContent = playlist.name;
                    }
                  });
                })
                .catch((err) => {
                  console.log(err);
                });
    }
    if (window.user_id) {
      return window.getAllPlaylistsByUserId(window.user_id)
                .then((response) => {
                  const playlistList = response.data.data;
                  playlistList.forEach((playlist) => {
                    if(playlist.id !== parseInt(window.playlist_id)) {
                      const button = createDropDownButton(playlist);
                      playlistDropdownMenu.appendChild(button);
                    } else {
                      playlistDropdownPrimary.textContent = playlist.name;
                    }
                  });
                })
                .catch((err) => {
                  console.log(err);
                });
    }

  }
  function clearDropDown() {
    while(playlistDropdownMenu.firstChild) {
      playlistDropdownMenu.removeChild(playlistDropdownMenu.firstChild);
    }
  }
  function createDropDownButton(playlistData) {
    const button = document.createElement('button');
    button.classList = 'dropdown-item';
    button.setAttribute('type', 'button');
    button.textContent = playlistData.name;
    button.setAttribute('data-playlist-id', playlistData.id);
    return button;
  }
  function dropdownOptionSelected(event) {
    event.preventDefault();
    const id = event.target.getAttribute('data-playlist-id');
    window.playlist_id = id;
    renderPlaylistDropDown(window.selectedUser);
  }

  playlistDropdownMenu.addEventListener('click', dropdownOptionSelected);

  window.renderPlaylistDropDown = renderPlaylistDropDown;
})();
